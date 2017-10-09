import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Body from './components/Body';

class App extends Component {
  render() {
    return (
      <Body />
    );
  }
}

export default App;
