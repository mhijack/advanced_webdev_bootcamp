import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RecipeInput.css';

class RecipeInput extends Component {
	static defaultProps = {
    onClose() {},
    onSave() {}
	};

  static propTypes = {
    onClose: PropTypes.func
  }
	// states include:
	// title
	// img
	// array of ingredients that can change
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			ingredients: [''],
			instructions: '',
			img: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleNewIngredient = this.handleNewIngredient.bind(this);
    this.handleChangeIng = this.handleChangeIng.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

	// onChange will pass on a browser event as a parameter
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	// when '+' button is clicked, a new line of input should appear for user to enter extra ingredients
	// add an extra item to the ingredients array in the state
	handleNewIngredient(e) {
		const ingredients = [...this.state.ingredients, ''];
		// only update the this.state.ingredients; other data in this.state remain unchanged
		this.setState({
			ingredients
		});
	}

	// when code this function, always think that this function is only working when user types a new ingredient
	handleChangeIng(event) {
		// get index of which ingredient changed
		const index = Number(event.target.name.split('-')[1]);
		// map over ingredients array; if index equals, then replace old value with 'event.target.value', which is the new value
		const ingredients = this.state.ingredients.map((ing, i) => (i === index ? event.target.value : ing));
		this.setState({
			ingredients
		});
	}

  // does 3 things: 1. call the onSave callback; 2. preventDefault(); 3. clear the form;
  handleSubmit(event) {
    event.preventDefault();

    // want to pass down onSave() with all the values the form currently has
    this.props.onSave({...this.state});

    this.setState({
			title: '',
			ingredients: [''],
			instructions: '',
			img: ''
		});
  }

	render() {
		const { title, ingredients, instructions, img } = this.state;
		let inputs = ingredients.map((ing, i) => (
			<div className="recipe-form-line" key={`ingredient-${i}`}>
				<label>{i + 1}.</label>
				<input
					type="text"
					// 'name' attribute allows us to precisely locate the ingredient the user is updating
					name={`ingrendiet-${i}`}
					value={ing}
					size={45}
					autoComplete="off"
					placeholder="Ingredient"
					onChange={this.handleChangeIng}
				/>
			</div>
		));
		// const { onClose } = this.props;

		return (
			<div className="recipe-form-container">
				<form className="recipe-form" onSubmit={this.handleSubmit}>
					<button type="button" className="close-button" onClick={this.props.onClose}>
						X
					</button>

					<div className="recipe-form-line">
						<label htmlFor="recipe-title-input">Title</label>
						<input
							id="recipe-title-input"
							key="title"
							name="title"
							type="text"
							value={title}
							size={42}
							autoComplete="off"
							onChange={this.handleChange}
						/>

						<label htmlFor="recipe-title-input">Instructions</label>
						<textarea
							key="instructions"
							id="recipe-instructions-input"
							type="Instructions"
							name="instructions"
							rows="8"
							cols="50"
							autoComplete="off"
							value={instructions}
							onChange={this.handleChange}
						/>
						{/* render list of ingredients, and enable user to make change */}
						{inputs}

						<button type="button" onClick={this.handleNewIngredient} className="buttons">
							+
						</button>

						<div className="recipe-form-line">
							<label htmlFor="recipe-title-input">Image</label>
							<input
								type="text"
								name="img"
								placeholder=""
								value={img}
								size={36}
								autoComplete="off"
								onChange={this.handleChange}
							/>
						</div>
						<button type="submit" className="buttons" style={{ alignSelf: 'flex-end', marginRight: 0 }}>
							SAVE
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default RecipeInput;
