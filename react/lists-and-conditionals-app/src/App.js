import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';

const ValidationComponent = props => {
	if (props.length <= 5) {
		return <p>Text too short</p>;
	}
	return <p>Text long enough</p>;
};

const CharComponent = props => {
	const style = {
		display: 'inline-block',
		padding: '16px',
		textAlign: 'center',
		margin: '16px',
		border: '1px solid black',
		':hover': {
			backgroundColor: 'green',
			color: 'white'
		}
	};

	const letterArr = props.letters.split('');

	const classes = [];

	if (props.length <= 5) {
		classes.push('red');
	}

	if (props.length === 1) {
		classes.push('bold');
	}

	return letterArr.map((letter, index) => (
		<p
			className={classes.join(' ')}
			style={style}
			onClick={event => props.handleDelete(event, index)}
			index={index}
			key={index}
		>
			{index} - {letter}
		</p>
	));
};

class App extends Component {
	state = {
		value: ''
	};

	inputChangeHandler = event => {
		this.setState({
			value: event.target.value
		});
	};

	handleDelete = (event, id) => {
		const letters = this.state.value.split('');

		const letterIndex = letters.findIndex((letter, index) => index === id);

		letters.splice(letterIndex, 1);

		const letterArr = letters.join('');

		this.setState({
			value: letterArr
		});
	};

	render() {
		const classes = [];

		if (this.state.value.length <= 5) {
			classes.push('green');
		}

		if (this.state.value.length === 1) {
			classes.push('bold');
		}

		return (
			<div className="App">
				<ol>
					<li className={classes.join(' ')}>
						Create an input field (in App component) with a change listener which outputs the length of the
						entered text below it (e.g. in a paragraph).
					</li>
					<li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
					<li>
						Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending
						on the text length (e.g. take 5 as a minimum length)
					</li>
					<li>
						Create another component (=> CharComponent) and style it as an inline box (=> display:
						inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
					</li>
					<li>
						Render a list of CharComponents where each CharComponent receives a different letter of the
						entered text (in the initial input field) as a prop.
					</li>
					<li>When you click a CharComponent, it should be removed from the entered text.</li>
				</ol>
				<p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

				<input onChange={this.inputChangeHandler} value={this.state.value} />
				<p>
					<em>Length of input:</em> <strong className="red">{this.state.value.length}</strong>
				</p>
				<ValidationComponent length={this.state.value.length} />
				<CharComponent
					length={this.state.value.length}
					handleDelete={this.handleDelete}
					letters={this.state.value}
				/>
			</div>
		);
	}
}

export default Radium(App);
