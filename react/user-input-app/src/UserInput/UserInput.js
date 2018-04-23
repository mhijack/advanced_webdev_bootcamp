import React from 'react';
import './UserInput.css'
const UserInput = props => {
	return (
		<div>
			<input onChange={props.handleChange} value={props.username} placeholder="username" />
		</div>
	);
};

export default UserInput;
