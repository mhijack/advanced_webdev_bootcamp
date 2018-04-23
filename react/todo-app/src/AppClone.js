import React, { Component } from 'react';
import './App.css';

class TodoItem extends Component {
	render() {
		return <li>{this.props.text}</li>;
	}
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: ['go to class', 'get all As'],
			newTodo: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleSubmit(e) {
    e.preventDefault();

    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({
      todos,
      newTodo: ''
    })
  }

	render() {
    const todos = this.state.todos.map((todo, i) => {
      if (todo) {
        return <TodoItem key={i} text={todo} />
      }
    });
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
          <h1>Todo App Clone</h1>
					<input
						name="newTodo"
						value={this.state.newTodo}
						type="text"
						onChange={e => this.setState({ [e.target.name]: e.target.value })}
					/>
					<button type="submit">SAVE</button>
					<ol>{todos}</ol>
				</form>
			</div>
		);
	}
}

export default App;
