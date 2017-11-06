import React, { Component } from 'react';
import { connect } from 'react-redux';
import thunks from '../../redux/thunks/loaderThunk';
import Slider from './landing/Slider';
import Columns from './landing/Columns';
import Gallery from './landing/Gallery';

class Content extends Component {
  componentDidMount() {
    this.props.changeMediaPreloader();
    this.props.changeThunk();
  }

  render() {
    return (
      <div className="content">
        <div id="gallery">
          <div className="now_page som">
            <div className="container">
              <div className="sixteen columns">
                <div className="now_page_resize">
                  <h1 onClick={this.props.changeMediaPreloader}>
                    Find a <span>surf repair</span> while travelling.<br />
                    Shortboards, longboards, SUPs, kites...
                  </h1>
                  <p>Everything related to surf</p>
                  <div className="clr" />
                </div>
                <Slider />
                <Columns />
              </div>
            </div>
          </div>
          <div className="clr" />

          <div className="clr" />
          <Gallery />
          <div className="clr" />
        </div>
        <div className="clr" />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    mediaPreloader: state.loadReducer.mediaPreloader,
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeMediaPreloader: () => {
      dispatch({ type: 'LOADREDUCER.CHANGE_MEDIA_PRELOADER', payload: { mediaPreloader: false } });
    },
    changeThunk: () => dispatch(thunks.loaderThunk(false))
  };
};

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content);

export default ContentContainer;
