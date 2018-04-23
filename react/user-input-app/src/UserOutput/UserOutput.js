import React from 'react';

const UserOutput = props => {
	const style = {
		border: '1px solid orange',
		width: '50%',
		margin: '1em auto'
	}

	return (
		<div>
			<p style={style}>Username: <strong>{props.username}</strong></p>
		</div>
	);
};

export default UserOutput;
