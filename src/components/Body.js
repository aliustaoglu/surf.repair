import React, { Component } from 'react';
import Main from './Main';
import PreFooter from './PreFooter';
import Footer from './Footer';

class Body extends Component {
  render() {
    return (
      <div className="body_pattern">
        <div className="index_page">
          <Main />
          <div className="clr" />
          <PreFooter />
          <div className="clr" />
          <Footer />
          <div className="clr" />
        </div>
      </div>
    );
  }
}

export default Body;
