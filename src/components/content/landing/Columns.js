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
                    Unique, Modern &amp; Clean Design.
                  </a>
                </h2>
                <p>Donec ut enim in risus molestie posuere non eu massa. Vestibulum vel odio vel libero rutrum. </p>
              </div>
              <div className="colums_box no_bg colums_box_2">
                {' '}
                <img src="images/spacer.gif" alt="Image" width="39" height="39" border="0" />
                <h2>
                  <a className="columnsa" href="#">
                    Search Engine Optimized
                  </a>
                </h2>
                <p>Donec ut enim in risus molestie posuere non eu massa. Vestibulum vel odio vel libero rutrum. </p>
              </div>
              <div className="colums_box no_bg colums_box_3">
                {' '}
                <img src="images/spacer.gif" alt="Image" width="39" height="39" border="0" />
                <h2>
                  <a className="columnsa" href="#">
                    24/7 Customer Support
                  </a>
                </h2>
                <p>Donec ut enim in risus molestie posuere non eu massa. Vestibulum vel odio vel libero rutrum. </p>
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
