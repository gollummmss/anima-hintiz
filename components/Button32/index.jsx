import React from "react";
import "./Button32.css";

class Button32 extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="button-5">
        <div className="view-on-opensea-5">{children}</div>
      </div>
    );
  }
}

export default Button32;
