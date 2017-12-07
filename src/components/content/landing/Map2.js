import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import PropTypes from 'prop-types';

class Map extends Component {
  render() {
    return (
      <div>
        <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
          {this.props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
        </GoogleMap>
      </div>
    );
  }
}

Map.PropTypes = {
  isMarkerDown: PropTypes.bool
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

const MapConnected = withScriptjs(withGoogleMap(connect(mapStateToProps, mapDispatchToProps)(Map)));

export default MapConnected;
