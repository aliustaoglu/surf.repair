/**
 * React-JS-Google-Maps
 * author: Cuneyt Aliustaoglu
 * Uses lazy loading of google maps API.
 * If there are more than one components in the page API won't be loaded multiple times
 * Simple wrapper for React and no external dependencies other than React
 * All Google API functionalities can be passed onto this component
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

window.gmaps = {};
export const google = window.google;

// to trigger rendering of all map components(one or more than one) after Google Maps API is loaded
window.initializeGoogleMaps = sender => {
  for (let map in window.gmaps) {
    window.gmaps[map].setState({ isGoogleInitiated: true });
  }
};

class ReactJSGoogleMaps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoogleInitiated: false
    };
  }

  componentWillMount() {
    const isMapsEmpty = Object.keys(window.gmaps).length === 0 && window.gmaps.constructor === Object;
    if (!window.google && isMapsEmpty) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = `https://maps.google.com/maps/api/js?key=${this.props.apiKey}&callback=initializeGoogleMaps`;
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    }
    window.gmaps[this.props.id] = this;
  }

  componentDidUpdate() {
    if (window.google) {
      this.gmap = new window.google.maps.Map(document.getElementById(this.props.id), {
        ...this.props.mapOptions
      });
      this.props.onLoad(this.gmap);
    }
  }

  render() {
    const { className, style, id } = this.props;
    return <div id={id} style={style} className={className} />;
  }
}

ReactJSGoogleMaps.defaultProps = {
  style: {},
  className: '',
  mapOptions: {
    zoom: 1,
    center: { lat: 0, lng: 0 }
  },
  onLoad: () => {}
};

ReactJSGoogleMaps.propTypes = {
  id: PropTypes.string.isRequired,
  apiKey: PropTypes.string.isRequired,
  mapOptions: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
  onLoad: PropTypes.func
};

export default ReactJSGoogleMaps;
