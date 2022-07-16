import React from "react";
import "./Button2.css";

class Button2 extends React.Component {
  render() {
    const { viewOnOpensea } = this.props;

    return (
      <a href="https://www.joinlist.me/hintiz" target="_blank">
        <div className="button-1">
          <img className="opensea-white-logo" src="/img/opensea-white-logo@2x.svg" />
          <div className="view-on-opensea-1 fjallaone-normal-snow-drift-16px">{viewOnOpensea}</div>
        </div>
      </a>
    );
  }
}

export default Button2;
