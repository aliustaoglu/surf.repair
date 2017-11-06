import React, { Component } from 'react';
import { connect } from 'react-redux';

class Gallery extends Component {
  render() {
    return (
      <div />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

const GalleryConnected = connect(mapStateToProps, mapDispatchToProps)(Gallery);

export default GalleryConnected;
