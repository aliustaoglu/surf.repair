import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleMap, Marker } from "react-google-maps"


class LandingMap extends Component {
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

const LandingMapConnected = connect(mapStateToProps, mapDispatchToProps)(LandingMap);

export default LandingMapConnected;
