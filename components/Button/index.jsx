import React from "react";
import "./Button.css";

class Button extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="button">
        <a href="https://www.joinlist.me/hintiz" target="_blank">
          <div className="view-on-opensea">{children}</div>
        </a>
      </div>
    );
  }
}

export default Button;
