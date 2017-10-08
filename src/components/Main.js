import React, { Component } from 'react';
import Header from './header/Header';
import Content from './content/Content';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <div className="clr" />
        <Content />
        <div className="clr" />
      </div>
    );
  }
}

export default Main;
