import React, { Component } from 'react';
import { connect } from 'react-redux';

class Slider extends Component {
  render() {
    return (
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

                  <div className="slideDiv" data-width="500" data-content="vimeo" data-link="4749536" data-delay="3000">
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
              {this.props.mediaPreloader === true && <div className="mediaPreloader" />}
            </div>
          </div>

          <div className="clr" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

const SliderConnected = connect(mapStateToProps, mapDispatchToProps)(Slider);

export default SliderConnected;
