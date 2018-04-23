import React, { Component } from 'react';
import './Recipe.css';
import PropTypes from 'prop-types';

class Recipe extends Component {
	static defaultProps = {
		deleteRecipe() {}
	}

	static propTypes = {
		title: PropTypes.string.isRequired,
		ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
		instructions: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired,
		deleteRecipe: PropTypes.func,
		id: PropTypes.number.isRequired
	};

	render() {
		const { title, img, instructions, id, deleteRecipe } = this.props;
		const ingredients = this.props.ingredients.map((ing, i) => <li key={i}>{ing}</li>);

		return (
			<div className="recipe-card">
				<div className="recipe-card-image">
					<img src={img} alt={title} />
				</div>

				<div className="recipe-card-content">
					<h3 className="recipe-title">{title}</h3>
					<ol>{ingredients}</ol>
					<p>{instructions}</p>
					<button type="button" onClick={() => {this.props.deleteRecipe(id)}}>DELETE</button>
				</div>
			</div>
		);
	}
}

export default Recipe;
