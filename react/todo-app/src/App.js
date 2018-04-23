import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// // 1. written in class:
class TodoItem extends Component {
	// constructor not needed
	render() {
		return <li>{this.props.text}</li>;
	}
}

// // 2. written as stateless functional component
// const TodoItem = props => <li>{props.text}</li>;

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: ['walk dog', 'feed cat'],
			newTodo: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		// prevents loss of state once form is submitted
		e.preventDefault();

		const todos = [...this.state.todos, this.state.newTodo];

		// set new state with updated todo; also resets input field to empty
		this.setState({ todos, newTodo: '' });
	}

	// any typed input is used to set State, then the state is used to render page with new value of {newTodo}
	render() {
		const { newTodo } = this.state; // equivalent to: const newTodo = this.state.newTodo
		const todos = this.state.todos.map((todo, index) => {
			if (todo) {
				return <TodoItem key={index} text={todo} />;
			}
		});

		return (
			<div className="App">
				<form onSubmit={this.handleSubmit}>
					<h1>Simple Todo App</h1>

					<input
						type="text"
						name="newTodo"
						value={newTodo}
						// event.target -> input, input.name gives "newTodo"
						// writing e.target.name is better than hardcoding when you have multiple inputs
						onChange={e => this.setState({ [e.target.name]: e.target.value })}
					/>

					<button>SAVE</button>
					<ol>{todos}</ol>
				</form>
			</div>
		);
	}
}

export default App;

