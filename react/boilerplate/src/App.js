import React, { Component } from 'react';
import './App.css';

const Comp = props => {
  return (
    <div>
      {props.children}
    </div>
  )
}

const Container = props => {
  return <Comp>something</Comp>
}

export default Container;
