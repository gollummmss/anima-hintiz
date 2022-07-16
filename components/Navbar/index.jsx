import React from "react";
import Button from "../Button";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    const { digital, physical, creator, roadmap, buttonProps } = this.props;

    return (
      <div className="navbar">
        <div className="nav-container">
          <img className="crystal-forms-logo" src="/img/crystal-forms-logo@2x.svg" />
          <div className="nav-content">
            <div className="nav-menu-wrapper">
              <a href="#999-unique-section">
                <div className="digital-1 fjallaone-normal-snow-drift-15px">{digital}</div>
              </a>
              <a href="#999-unique-section">
                <div className="physical-1 fjallaone-normal-snow-drift-15px">{physical}</div>
              </a>
              <div className="creator fjallaone-normal-snow-drift-15px">{creator}</div>
              <a href="#roadmap-section">
                <div className="roadmap-1 fjallaone-normal-snow-drift-15px">{roadmap}</div>
              </a>
            </div>
            <div className="buttons-wrapper">
              <div className="icon-twitter">
                <a href="twitter.com/hintiz_io" target="_blank">
                  <img className="vector" src="/img/vector@2x.svg" />
                </a>
              </div>
              <Button>{buttonProps.children}</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
