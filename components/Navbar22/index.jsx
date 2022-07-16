import React from "react";
import Button42 from "../Button42";
import "./Navbar22.css";

class Navbar22 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`navbar-1 ${className || ""}`}>
        <div className="nav-container-1">
          <img className="crystal-forms-logo-1" src="/img/crystal-forms-logo-1@2x.svg" />
          <div className="nav-content-1">
            <div className="nav-menu-wrapper-1 textsmall-medium">
              <div className="about">About</div>
              <div className="attributes">Attributes</div>
              <div className="creator-1">Creator</div>
              <div className="roadmap-2">Roadmap</div>
            </div>
            <div className="buttons-wrapper-1">
              <img className="icon-twitter-2" src="/img/twitter-1@2x.svg" />
              <Button42 />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar22;
