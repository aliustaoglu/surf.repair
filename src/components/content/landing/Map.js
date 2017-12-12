import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GoogleMap from 'react-js-google-maps';

const mapOptions = {
  zoom: 4,
  center: { lat: -25.363, lng: 131.044 }
};

class Map extends Component {
  componentDidMount() {}

  render() {
    return (
      <GoogleMap
        id="surfMap"
        apiKey="AIzaSyDnZHCNVuYH8lZSMZtuHzJ4677eUi6AE8w"
        mapOptions={mapOptions}
        style={{ width: 800, height: 480 }}
      />
    );
  }
}

Map.PropTypes = {};

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

const MapConnected = connect(mapStateToProps, mapDispatchToProps)(Map);

export default MapConnected;
