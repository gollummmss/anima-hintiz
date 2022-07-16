import React from "react";
import "./Button3.css";

class Button3 extends React.Component {
  render() {
    const { viewOnOpensea } = this.props;

    return (
      <div className="button-2">
        <img className="opensea-white-logo-1" src="/img/opensea-white-logo-1@2x.svg" />
        <div className="view-on-opensea-2">{viewOnOpensea}</div>
      </div>
    );
  }
}

export default Button3;
