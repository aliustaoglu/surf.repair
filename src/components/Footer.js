import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
      <div className="container">
        <div className="sixteen columns">
          <div className="footer_resize">
            <p>
              2017 &copy; Copyright Surf.Repair. All Rights Reserved. Design by {' '}
              <a href="http://cuneyt.aliustaoglu.biz/" target="_blank" title="Cüneyt Aliustaoğlu">
                Cüneyt Aliustaoğlu
              </a>.
            </p>
          </div>
        </div>
      </div>
      <div className="clr" />
    </div>
    );
  }
}

export default Footer;
