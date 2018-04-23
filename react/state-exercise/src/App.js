import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

// stateless functional component
const InstructorItem = props => {
	return (
		<li>
			<h3>{props.name}</h3>
			<h4>Hobbies: {props.hobbies.join(', ')}</h4>
		</li>
	);
};

// propTypes outside the function
InstructorItem.propTypes = {
	name: PropTypes.string,
	hobbies: PropTypes.arrayOf(PropTypes.string)
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			instructors: [
				{
					name: 'Tim',
					hobbies: ['sailing', 'react']
				},
				{
					name: 'Matt',
					hobbies: ['math', 'd3']
				},
				{
					name: 'Colt',
					hobbies: ['css', 'hiking']
				},
				{
					name: 'Elie',
					hobbies: ['music', 'es2015']
				}
			]
		};

		// after 5 seconds, remove a random hobby from a random instructor
		setTimeout(() => {
			// get random instructor index
			const randInst = Math.floor(Math.random() * this.state.instructors.length);

			// get index of random hobby
			const hobbyIndex = Math.floor(Math.random() * this.state.instructors[randInst].length);

			// // ====== method 1 ======
			// // create a copy of this.state.instructors to manipulate
			// const instructors = this.state.instructors.slice();

			// // work with the copy to keep original state untouched
			// instructors[randInst] = Object.assign({}, instructors[randInst]);
			// instructors[randInst].hobbies = instructors[randInst].hobbies.slice();
			// instructors[randInst].hobbies.splice(hobbyIndex, 1);

			// ====== method 2 ======
			// map returns a new array
			const instructors = this.state.instructors.map((inst, i) => {
				// if randInst index is equal to inst, return modified instructor
				// otherwise return original instructor
				if (i === randInst) {
					// create copy of hobbies and delete the random hobby
					const hobbies = [...inst.hobbies].splice(hobbyIndex, 1);
					return {
						...inst,
						// save sliced hobbies to new instructor that will be returned to the new array
						hobbies
					};
				}
				return inst;
			});

			// update state, delete the hobby with .splice(start, deleteCount)
			this.setState({ instructors });
		}, 3000);
	}

	render() {
		const instructors = this.state.instructors.map((instructor, index) => (
			<InstructorItem key={index} name={instructor.name} hobbies={instructor.hobbies} />
		));
		return (
			<div className="App">
				<ul>{instructors}</ul>
			</div>
		);
	}
}

export default App;

// ====================================================
this.setState({ name: 'Jack' }, () => {
	console.log('Now the state is updated', this.state.name); // 'Jack'
})