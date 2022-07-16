import React from "react";
import { Link } from "react-router-dom";
import "./FooterSection.css";

class FooterSection extends React.Component {
  render() {
    const {
      frame,
      a999PieceCustomA,
      builtByNikolaiBai,
      site,
      place1,
      place2,
      termsConditions,
      privacyPolicy,
    } = this.props;

    return (
      <div className="footer-section">
        <div className="footer-container">
          <div className="footer-wrapper">
            <div className="left-content">
              <div className="logo-wrapper">
                <img className="frame" src={frame} />
                <div className="a-999-piece-custom-a">{a999PieceCustomA}</div>
              </div>
              <div className="built-by-nikolai-bai fjallaone-normal-white-14px">{builtByNikolaiBai}</div>
            </div>
            <div className="right-content">
              <div className="pages-wrapper">
                <div className="site">
                  <div className="site-1 fjallaone-normal-white-14px">{site}</div>
                  <div className="page-wrapper">
                    <div className="place-1 fjallaone-normal-mountain-mist-15px">{place1}</div>
                    <Link to="/03-contact-us-page">
                      <div className="place-2 fjallaone-normal-mountain-mist-15px">{place2}</div>
                    </Link>
                    <Link to="/03-contact-us-page">
                      <div className="terms-conditions fjallaone-normal-mountain-mist-15px">{termsConditions}</div>
                    </Link>
                    <Link to="/02-privacy-policy-page">
                      <div className="privacy-policy fjallaone-normal-mountain-mist-15px">{privacyPolicy}</div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="icons">
                <img className="discord" src="/img/discord@2x.svg" />
                <a href="twitter.com/hintiz_io" target="_blank">
                  <img className="icon-twitter-1" src="/img/twitter@2x.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterSection;
