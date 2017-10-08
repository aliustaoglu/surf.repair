import React, { Component } from 'react';

class PreFooter extends Component {
  render() {
    return (
      <div className="prefooter">
      <div className="prefooter_bg">
        <div className="container">
          <div className="sixteen columns">
            <div className="prefooter_resize">
              <div className="fcol">
                <h3>Latest Tweets</h3>
              </div>
              <div className="fcol">
                <h3>Stay Connected</h3>
                <p>
                  123 Example Way<br />
                  San Francisco, CA 94108<br />
                  USA <br />
                  <br />
                  Phone: (888) 123-4567 <br />
                  Fax: (887) 123-4567 <br />
                  contact&#64;example.com
                  <br />
                </p>

                <iframe
                  src="http://www.facebook.com/plugins/like.php?href=http://www.facebook.com/wwwsurfrepair&send=false&layout=standard&width=200&show_faces=false&action=like&colorscheme=dark&font&height=35"
                  scrolling="no"
                  frameBorder="0"
                  style={{ border: 'none', overflow: 'hidden', width: '200px', height: '45px' }}
                  allowTransparency="true"
                />
              </div>
              <div className="fcol">
                <h3>Our Commitment</h3>
                <p>
                  We strive to deliver a level of service that exceeds the expectations of our customers. <br />
                  <br />If you have any questions about our products or services, please do not hesitate to
                  contact us. We have friendly, knowledgeable representatives available seven days a week to
                  assist you.
                </p>
              </div>
              <div className="fcol last">
                <h3>Keep Updated</h3>
                <p>Subscribe to our mailing list for offers, news updates and more!</p>

                <div id="mailform-subscribe">
                  <form
                    action="#"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                  >
                    <input
                      type="email"
                      size="15"
                      value="Your Email"
                      name="EMAIL"
                      className="required email"
                      id="mce-EMAIL"
                      onFocus="if(this.value==this.defaultValue)this.value='';"
                      onBlur="if(this.value=='')this.value=this.defaultValue;"
                    />

                    <div id="mce-responses" className="clear">
                      <div className="response" id="mce-error-response" style={{ display: 'none' }} />
                      <div className="response" id="mce-success-response" style={{ display: 'none' }} />
                    </div>

                    <div>
                      <input
                        type="submit"
                        value="Subscribe"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="button"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="clr" />
            </div>
          </div>
        </div>
        <div className="clr" />
        <div className="prefooter_resize_bottom" />
        <div className="clr" />
      </div>
      <div className="clr" />
    </div>
    );
  }
}

export default PreFooter;
