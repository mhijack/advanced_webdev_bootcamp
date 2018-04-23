import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
	// // if wish to use 'this' in the constructor to create variables, must 'super' first
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		username: 'jack'
	// 	};
	// }

  state= {
    username: 'jack'
  }

  handleChange = e => {
    this.setState({
      username: e.target.value
    })
  }

	render() {
		return (
			<div className="App">
				<UserInput username={this.state.username} handleChange={this.handleChange} />
				<UserOutput username={this.state.username} />
			</div>
		);
	}
}

export default App;
