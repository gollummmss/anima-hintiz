import React from "react";
import "./Frame17.css";

class Frame17 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`frame-17-1 ${className || ""}`}>
        <div className="when-is-the-mint-date fjallaone-normal-white-26px">{children}</div>
      </div>
    );
  }
}

export default Frame17;
