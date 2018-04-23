import React, { Component } from 'react';
import HobbyList from './Hobby';
import './Pet.css';

class Pet extends Component {
  render() {
    const liStyle = { fontSize: '1.5em' };

    return (

      <div className="card">
        <h2 className="name">Moxie</h2>

        <img src="https://github.com/tigarcia/Moxie/raw/master/moxie.png" alt="Moxie the Cat" />

        <h5 style={{fontSize: '2em', margin: '2px'}}>Hobbies: </h5>

        <HobbyList />
      </div>
    )
  }
}

export default Pet;