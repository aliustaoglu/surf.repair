import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Map extends Component {
  componentDidMount() {
    const map = new window.google.maps.Map(this.refs.map, {
      zoom: 4,
      center: {lat: -25.363882, lng: 131.044922 }
    });
  }

  render() {
    return (
      <div style={{width: 800, height: 480}} ref="map">
        
      </div>
    );
  }
}

Map.PropTypes = {
  
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

const MapConnected = connect(mapStateToProps, mapDispatchToProps)(Map);

export default MapConnected;
