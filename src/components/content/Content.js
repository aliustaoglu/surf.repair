import React, { Component } from 'react';
import { connect } from 'react-redux';
import thunks from '../../redux/thunks/loaderThunk';

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
                <div className="now_page_resize">
                  <div id="now_slider" className="slider">
                    <div
                      id="dream_accordion_responsive"
                      style={{ width: '100%', margin: '0 auto', height: '385px', position: 'relative' }}
                    >
                      <div id="sliderWrapper">
                        <div className="sliderCointainer">
                          <div className="sliderHolder">
                            <div
                              className="slideDiv"
                              data-width="500"
                              data-content=""
                              data-link="http://www.google.com"
                              data-target="_blank"
                              data-delay="3000"
                            >
                              <img className="stack_img" src="../../sliders/kbpanel-slider/images/image1.jpg" alt="" />
                              <p
                                data-title="title"
                                className="-90,bl,10,10"
                                data-background-color="rgba(51,51,51, 0.6)"
                                data-color="#ffffff"
                              >
                                Dream Accordion
                              </p>
                              <p
                                data-title="caption"
                                className="50,200"
                                data-background-color="rgba(51,51,51, 0.6)"
                                data-color="#ffffff"
                              >
                                The World's Best Accordion Slider
                              </p>
                              <p
                                data-title="caption"
                                className="50,250"
                                data-background-color="rgba(51,51,51, 0.3)"
                                data-color="#ffffff"
                              >
                                {' '}
                                <a style={{ textDecoration: 'none' }} href="#" target="_blank">
                                  Supports YouTube, Vimeo & HTML Content.
                                </a>
                              </p>
                            </div>

                            <div className="slideDiv" data-width="500" data-content="" data-link="" data-delay="5000">
                              <div id="gmap_canvas" />
                              <p
                                data-title="title"
                                className="-90,bl,10,10"
                                data-background-color="rgba(153,204,0, 0.6)"
                                data-color="#ffffff"
                              >
                                Google maps
                              </p>
                              <p
                                data-title="caption"
                                className="50,250"
                                data-background-color="rgba(153,204,0, 0.6)"
                                data-color="#ffffff"
                              >
                                Google Maps (try it!)
                              </p>
                            </div>

                            <div
                              className="slideDiv"
                              data-width="500"
                              data-content="youtube"
                              data-link="FG0fTKAqZ5g"
                              data-delay="3000"
                            >
                              <img className="stack_img" src="../../sliders/kbpanel-slider/images/image1.jpg" alt="" />
                              <p
                                data-title="title"
                                className="-90,bl,10,10"
                                data-background-color="rgba(204,0,0, 0.6)"
                                data-color="#ffffff"
                              >
                                YouTube Supported
                              </p>
                              <p
                                data-title="caption"
                                className="50,50"
                                data-background-color="rgba(204,0,0, 0.6)"
                                data-color="#ffffff"
                              >
                                This is Youtube
                              </p>
                              <p
                                data-title="caption"
                                className="50,250"
                                data-background-color="rgba(51,51,51, 0.6)"
                                data-color="#ffffff"
                              >
                                Click anywhere to view the video
                              </p>
                            </div>

                            <div
                              className="slideDiv"
                              data-width="500"
                              data-content="vimeo"
                              data-link="4749536"
                              data-delay="3000"
                            >
                              <img className="stack_img" src="../../sliders/kbpanel-slider/images/image1.jpg" alt="" />
                              <p
                                data-title="title"
                                className="-90,bl,10,10"
                                data-background-color="rgba(0,153,204, 0.6)"
                                data-color="#ffffff"
                              >
                                Vimeo Supported
                              </p>
                              <p
                                data-title="caption"
                                className="50,50"
                                data-background-color="rgba(0,153,204, 0.6)"
                                data-color="#ffffff"
                              >
                                This is Vimeo
                              </p>
                              <p
                                data-title="caption"
                                className="50,250"
                                data-background-color="rgba(51,51,51, 0.6)"
                                data-color="#ffffff"
                              >
                                Click to play
                              </p>
                            </div>

                            <div
                              className="slideDiv"
                              data-width="500"
                              data-content="image"
                              data-link=""
                              data-target=""
                              data-delay="3000"
                            >
                              {' '}
                              <img className="stack_img" src="../../sliders/kbpanel-slider/images/image1.jpg" alt="" />
                              <p
                                data-title="title"
                                className="-90,bl,10,10"
                                data-background-color="rgba(255,102,0, 0.6)"
                                data-color="#ffffff"
                              >
                                100% Flexible
                              </p>
                              <p
                                data-title="caption"
                                className="50,250"
                                data-background-color="rgba(51,51,51, 0.6)"
                                data-color="#ffffff"
                              >
                                Tons of customization options
                              </p>
                            </div>

                            <div
                              className="slideDiv"
                              data-width="500"
                              data-content=""
                              data-link=""
                              data-target=""
                              data-delay="3000"
                            >
                              {' '}
                              <img className="stack_img" src="../../sliders/kbpanel-slider/images/image1.jpg" alt="" />
                              <p
                                data-title="title"
                                className="-90,bl,10,10"
                                data-background-color="rgba(94,73,188, 0.6)"
                                data-color="#ffffff"
                              >
                                More Slides!
                              </p>
                              <p
                                data-title="caption"
                                className="50,50"
                                data-background-color="rgba(51,51,51, 0.6)"
                                data-color="#ffffff"
                              >
                                Shows more slides gradually
                              </p>
                            </div>

                            <div
                              className="slideDiv"
                              data-width="500"
                              data-content=""
                              data-link=""
                              data-target=""
                              data-delay="3000"
                            >
                              {' '}
                              <img className="stack_img" src="../../sliders/kbpanel-slider/images/image1.jpg" alt="" />
                              <p
                                data-title="title"
                                className="-90,bl,10,10"
                                data-background-color="rgba(4,4,4, 0.6)"
                                data-color="#ffffff"
                              >
                                Links & more!
                              </p>
                              <p
                                data-title="caption"
                                className="50,200"
                                data-background-color="rgba(128,128,128, 0.6)"
                                data-color="#ffffff"
                              >
                                Supports Real Links!
                              </p>
                              <p
                                data-title="caption"
                                className="50,250"
                                data-background-color="rgba(91,91,91, 0.6)"
                                data-color="#ffffff"
                              >
                                <a style={{ textDdecoration: 'none' }} href="http://www.bing.com" target="_blank">
                                  Click me: Bing Search
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="controls">
                          <div className="controls_prev">
                            <img
                              src="js/dream-accordion/data/icons/controls_prev.gif"
                              width="9"
                              height="13"
                              alt="controls_prev"
                            />
                          </div>
                          <div className="controls_toggle">
                            <img
                              src="js/dream-accordion/data/icons/controls_play.gif"
                              width="9"
                              height="13"
                              alt="controls_toggle"
                            />
                          </div>
                          <div className="controls_next">
                            <img
                              src="js/dream-accordion/data/icons/controls_next.gif"
                              width="9"
                              height="13"
                              alt="controls_next"
                            />
                          </div>
                        </div>
                        <div className="scroll">
                          <div className="scrollTrack" />
                          <div className="scrollBar" />
                        </div>
                        <div className="fontMeasure">a</div>
                        { this.props.mediaPreloader === true && <div className="mediaPreloader" />}
                      </div>
                    </div>

                    <div className="clr" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clr" />
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
          <div className="clr" />
          <div className="greyfull">
            <div className="container">
              <div className="sixteen columns">
                <div className="now_page_resize">
                  <h4 className="linebg">
                    {' '}
                    <span>Recent From Gallery</span>
                  </h4>
                  <div className="cols444">
                    <div className="col444 first">
                      <div className="pic img_hover_box 1_ico">
                        <a
                          src="../../sliders/kbpanel-slider/images/image1.jpg"
                          className="prettyPhoto"
                          rel="prettyPhoto[id]"
                        >
                          <img
                            src="../../sliders/kbpanel-slider/images/image1.jpg"
                            width="260"
                            height="160"
                            alt="Image"
                          />
                          <div className="img_hover_overlay">
                            <div className="r_plus" />
                          </div>
                        </a>{' '}
                      </div>
                      <h4 className="added">
                        <a className="columnsa" href="#">
                          Quisque volutpat mattis eros
                        </a>
                      </h4>
                      <p className="added">
                        Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna
                        nibh.
                      </p>
                    </div>
                    <div className="col444">
                      <div className="pic img_hover_box 1_ico">
                        <a
                          src="../../sliders/kbpanel-slider/images/image1.jpg"
                          className="prettyPhoto"
                          rel="prettyPhoto[id]"
                        >
                          <img
                            src="../../sliders/kbpanel-slider/images/image1.jpg"
                            width="260"
                            height="160"
                            alt="Image"
                          />
                          <div className="img_hover_overlay">
                            <div className="r_plus" />
                          </div>
                        </a>{' '}
                      </div>
                      <h4 className="added">
                        <a className="columnsa" href="#">
                          Quisque volutpat mattis eros
                        </a>
                      </h4>
                      <p className="added">
                        Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna
                        nibh.
                      </p>
                    </div>
                    <div className="col444 last">
                      <div className="pic img_hover_box 1_ico">
                        <a
                          src="../../sliders/kbpanel-slider/images/image1.jpg"
                          className="prettyPhoto"
                          rel="prettyPhoto[id]"
                        >
                          <img
                            src="../../sliders/kbpanel-slider/images/image1.jpg"
                            width="260"
                            height="160"
                            alt="Image"
                          />
                          <div className="img_hover_overlay">
                            <div className="r_plus" />
                          </div>
                        </a>{' '}
                      </div>
                      <h4 className="added">
                        <a className="columnsa" href="#">
                          Quisque volutpat mattis eros
                        </a>
                      </h4>
                      <p className="added">
                        Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna
                        nibh.
                      </p>
                    </div>
                    <div className="clr" />
                  </div>
                  <div className="clr" />
                </div>
                <h4 className="linebg">
                  {' '}
                  <span>Our CLients</span>
                </h4>
                <div className="cols4442">
                  <div id="tS2" className="jThumbnailScroller">
                    <div className="jTscrollerContainer">
                      <div className="jTscroller">
                        {' '}
                        <a href="#">
                          <img src="images/partn.png" />
                        </a>{' '}
                        <a href="#">
                          <img src="images/partn-02.png" />
                        </a>{' '}
                        <a href="#">
                          <img src="images/partn-03.png" />
                        </a>{' '}
                        <a href="#">
                          <img src="images/partn-04.png" />
                        </a>{' '}
                        <a href="#">
                          <img src="images/partn-05.png" />
                        </a>{' '}
                        <a href="#">
                          <img src="images/partn.png" />
                        </a>{' '}
                        <a href="#">
                          <img src="images/partn-02.png" />
                        </a>{' '}
                        <a href="#">
                          <img src="images/partn-03.png" />
                        </a>{' '}
                        <a href="#">
                          <img src="images/partn-04.png" />
                        </a>{' '}
                        <a href="#">
                          <img src="images/partn-05.png" />
                        </a>{' '}
                        <a href="#">
                          <img src="images/partn.png" />
                        </a>{' '}
                        <a href="#">
                          <img src="images/partn-02.png" />
                        </a>{' '}
                        <a href="#">
                          <img src="images/partn-03.png" />
                        </a>{' '}
                        <a href="#">
                          <img src="images/partn-04.png" />
                        </a>{' '}
                        <a href="#">
                          <img src="images/partn-05.png" />
                        </a>{' '}
                        <a href="#">
                          <img src="images/partn.png" />
                        </a>{' '}
                        <a href="#">
                          <img src="images/partn-02.png" />
                        </a>{' '}
                        <a href="#">
                          <img src="images/partn-03.png" />
                        </a>{' '}
                        <a href="#">
                          <img src="images/partn-04.png" />
                        </a>{' '}
                        <a href="#">
                          <img src="images/partn-05.png" />
                        </a>{' '}
                        <a href="#">
                          <img src="images/partn.png" />
                        </a>{' '}
                        <a href="#">
                          <img src="images/partn-02.png" />
                        </a>{' '}
                        <a href="#">
                          <img src="images/partn-03.png" />
                        </a>{' '}
                        <a href="#">
                          <img src="images/partn-04.png" />
                        </a>{' '}
                        <a href="#">
                          <img src="images/partn-05.png" />
                        </a>{' '}
                        <a href="#">
                          <img src="images/partn.png" />
                        </a>{' '}
                        <a href="#">
                          <img src="images/partn-02.png" />
                        </a>{' '}
                      </div>
                    </div>
                    <a href="#" className="jTscrollerPrevButton" /> <a href="#" className="jTscrollerNextButton" />{' '}
                  </div>
                </div>
                <h4 className="linebg2">
                  {' '}
                  <span>Follow Us</span>
                </h4>
                <div className="clr" />
                <div className="RSS">
                  {' '}
                  <a href="#">
                    <img src="images/spacer.gif" alt="f" width="34" height="34" border="0" className="rss1" />
                  </a>{' '}
                  <a href="#">
                    <img src="images/spacer.gif" alt="f" width="34" height="34" border="0" className="rss2" />
                  </a>{' '}
                  <a href="#">
                    <img src="images/spacer.gif" alt="f" width="34" height="34" border="0" className="rss3" />
                  </a>{' '}
                  <a href="#">
                    <img src="images/spacer.gif" alt="f" width="34" height="34" border="0" className="rss4" />
                  </a>{' '}
                  <a href="#">
                    <img src="images/spacer.gif" alt="f" width="34" height="34" border="0" className="rss5" />
                  </a>{' '}
                  <a href="#">
                    <img src="images/spacer.gif" alt="f" width="34" height="34" border="0" className="rss6" />
                  </a>{' '}
                </div>
                <div className="clr" />
              </div>
              <div className="clr" />
            </div>
          </div>
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
