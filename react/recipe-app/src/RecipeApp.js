import React, { Component } from 'react';
import logo from './logo.svg';
import './RecipeApp.css';
import Recipe from './Recipe';
import Navbar from './Navbar';
import RecipeList from './RecipeList';
import RecipeInput from './RecipeInput';

class RecipeApp extends Component {
	constructor(props) {
		super(props);
		this.handleSave = this.handleSave.bind(this);
		this.deleteRecipe = this.deleteRecipe.bind(this);

		this.state = {
			recipes: [
				{
					title: 'Spaghetti',
					instructions:
						'Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce',
					ingredients: ['pasta', '8 cups water', '1 box spaghetti'],
					img: 'spaghetti.jpg',
					id: 0
				},
				{
					title: 'Milkshake',
					instructions: 'Combine ice cream and milk.  Blend until creamy',
					ingredients: ['2 Scoops Ice cream', '8 ounces milk'],
					img: 'milkshake.jpg',
					id: 1
				},
				{
					title: 'Avocado Toast',
					instructions:
						'Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.',
					ingredients: [
						'2 slices of bread',
						'1 avocado',
						'1 tablespoon olive oil',
						'1 pinch of salt',
						'pepper'
					],
					img: 'avocado.jpg',
					id: 2
				}
			],
			nextRecipeId: 3,
			showForm: false
		};
	}

	// recipe equals ...this.state in onSave() from RecipeInput component
	handleSave(recipe) {
		this.setState((prevState, props) => {
			// get new recipe (here, recipe refers to all the recipe info from the form)
			const newRecipe = { ...recipe, id: this.state.nextRecipeId };

			// modify recipe array to include newRecipe
			return {
				recipes: [...this.state.recipes, newRecipe],
				// increment id counter by 1
				newRecipeId: prevState.newRecipeId + 1,
				showForm: false
			};
		});
	}

	deleteRecipe(id) {
		const recipes = this.state.recipes.filter(recipe => recipe.id !== id);
		this.setState({recipes});
	}

	render() {
		const { showForm } = this.state;

		return (
			<div className="App">
				<Navbar onNewRecipe={() => this.setState({ showForm: true })} />
				{/* if showForm is false, return nothing; thus form won't be shown */}
				{showForm ? (
					<RecipeInput onClose={() => this.setState({ showForm: false })} onSave={this.handleSave} />
				) : null}
				<RecipeList
					recipes={this.state.recipes}
					deleteRecipe={this.deleteRecipe}
				/>
			</div>
		);
	}
}

export default RecipeApp;
