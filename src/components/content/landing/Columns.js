import React, { Component } from 'react';
import { connect } from 'react-redux';

class Columns extends Component {
  render() {
    return (
      <div className="columns1">
        <div className="container">
          <div className="sixteen columns">
            <div className="now_page_resize">
              <div className="colums_box no_bg colums_box_1 first">
                {' '}
                <img src="images/spacer.gif" alt="Image" width="39" height="39" border="0" />
                <h2>
                  <a className="columnsa" href="#">
                    No membership required for surfers
                  </a>
                </h2>
                <p>You can become a member to gain from more functionalities but it's not necessary. Membership is free.</p>
              </div>
              <div className="colums_box no_bg colums_box_2">
                {' '}
                <img src="images/spacer.gif" alt="Image" width="39" height="39" border="0" />
                <h2>
                  <a className="columnsa" href="#">
                    Easy membership for ding fixers
                  </a>
                </h2>
                <p>Are you a ding fixer? Become a member to reach more surfers worldwide.</p>
              </div>
              <div className="colums_box no_bg colums_box_3">
                {' '}
                <img src="images/spacer.gif" alt="Image" width="39" height="39" border="0" />
                <h2>
                  <a className="columnsa" href="#">
                    Easy layout. Target focused
                  </a>
                </h2>
                <p>No need to scan search engines. Use simple map tool to find your fixer.</p>
              </div>
              <div className="colums_box no_bg colums_box_4">
                {' '}
                <img src="images/spacer.gif" alt="Image" width="39" height="39" border="0" />
                <h2>
                  <a className="columnsa" href="#">
                    Multi Purpose Functionality
                  </a>
                </h2>
                <p>Donec ut enim in risus molestie posuere non eu massa. Vestibulum vel odio vel libero rutrum. </p>
              </div>
              <div className="clr" />
            </div>
            <div className="clr" />
          </div>
        </div>
        <div className="clr" />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

const ColumnsConnected = connect(mapStateToProps, mapDispatchToProps)(Columns);

export default ColumnsConnected;
