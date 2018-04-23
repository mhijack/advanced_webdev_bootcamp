import React, { Component } from 'react';
import Recipe from './Recipe';
import './RecipeList.css';
import PropTypes from 'prop-types';

class RecipeList extends Component {
	static propTypes = {
		recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
		deleteRecipe: PropTypes.func.isRequired
	};

	// using Recipe.js as a template for each Recipe, RecipeList.js compiles to all recipes
	render() {
		const recipes = this.props.recipes.map(r => (
			<Recipe key={r.id} {...r} deleteRecipe={this.props.deleteRecipe} />
		));
		return <div className="recipe-list">{recipes}</div>;
	}
}

export default RecipeList;
