import React, { Component } from 'react';

class HobbyList extends React.Component {
  render() {
    const liStyle = { fontSize: '1.5em' };
    const hobbies = ['Sleeping', 'Eating', 'Cuddling'];

    return (
      <ul>
        {hobbies.map((h, i) => {
          // each time using array methods, should give each element a unique key
          // in this case, 'key={i}'
          return <li key={i} style={liStyle}>{h}</li>
        })}
      </ul>
    );
  }
}

export default HobbyList;