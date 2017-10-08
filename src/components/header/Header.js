import React, { Component } from 'react';
import Menu from './Menu';

class Header extends Component {
  render() {
    return (
      <div className="header">
      <div className="container">
        <div className="sixteen columns">
          <div className="header_resize">
            <div className="logo">
              <div>
                <a href="index.html">
                  surf<span>.repair</span>
                </a>
              </div>
            </div>
            <Menu />
            <div className="clr" />
          </div>
        </div>
      </div>
      <div className="clr" />
    </div>
    );
  }
}

export default Header;
