import React from "react";
import LogoWrapper from "../LogoWrapper";
import "./FooterSection22.css";

class FooterSection22 extends React.Component {
  render() {
    const { className, logoWrapperProps } = this.props;

    return (
      <div className={`footer-section-1 ${className || ""}`}>
        <div className="footer-container-1">
          <div className="footer-wrapper-1">
            <div className="left-content-1">
              <LogoWrapper
                frame={logoWrapperProps.frame}
                a999PieceCustomA={logoWrapperProps.a999PieceCustomA}
                className={logoWrapperProps.className}
              />
              <p className="built-by-nikolai-bai-1 texttiny-regular">
                <span className="span-8 texttiny-regular">Built by</span>
                <span className="span-9 texttiny-regular">&nbsp;</span>
                <span className="span-10 texttiny-regular">Nikolai Bain</span>
                <span className="span-8 texttiny-regular">.</span>
                <span className="span4 texttiny-regular">&nbsp;</span>
                <span className="span-8 texttiny-regular">Powered by</span>
                <span className="span-9 texttiny-regular">&nbsp;</span>
                <span className="span-10 texttiny-regular">Webflow</span>
                <span className="span-8 texttiny-regular">.</span>
              </p>
            </div>
            <div className="right-content-1">
              <div className="pages-wrapper-1">
                <div className="site-2">
                  <div className="site-3 texttiny-bold">SITE</div>
                  <div className="page-wrapper-1 textsmall-regular">
                    <div className="place-3">Home</div>
                    <div className="place-4">Contact</div>
                    <div className="terms-conditions-1">Terms &amp; Conditions</div>
                    <div className="privacy-policy-1">Privacy Policy</div>
                  </div>
                </div>
              </div>
              <img className="icons-1" src="/img/icons@2x.svg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterSection22;
