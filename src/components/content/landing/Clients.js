import React, { Component } from 'react';
import { connect } from 'react-redux';

class Clients extends Component {
  render() {
    return <div />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

const ClientsConnected = connect(mapStateToProps, mapDispatchToProps)(Client);

export default ClientsConnected;
