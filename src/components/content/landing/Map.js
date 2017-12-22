import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GoogleMap from './ReactJsGoogleMaps';
import { loadMapData } from '../../../redux/thunks/mapThunk';

const mapOptions = {
  zoom: 4,
  center: { lat: -25.363, lng: 131.044 }
};

class Map extends Component {
  constructor(props) {
    super(props);
    this.onMapLoad = this.onMapLoad.bind(this);
  }

  onMapLoad(map) {
    const google = window.google;
    var myCenter = new google.maps.LatLng(-25.363, 131.044);
    var marker = new google.maps.Marker({ position: myCenter });
    marker.setMap(map);

    google.maps.event.addListener(marker, 'click', function() {
      var infowindow = new google.maps.InfoWindow({
        content: 'HELLO'
      });
      infowindow.open(map, marker);
    });
    
  }

  componentDidMount() {
    this.props.loadMapData();
  }

  render() {
    return (
      <GoogleMap
        id="surfMap"
        apiKey="AIzaSyDnZHCNVuYH8lZSMZtuHzJ4677eUi6AE8w"
        mapOptions={mapOptions}
        style={{ width: 800, height: 480 }}
        onLoad={this.onMapLoad}
      />
    );
  }
}

Map.PropTypes = {};

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    loadMapData: () => {
      dispatch(loadMapData());
    }
  };
};

const MapConnected = connect(mapStateToProps, mapDispatchToProps)(Map);

export default MapConnected;
