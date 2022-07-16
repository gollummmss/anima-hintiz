import React from "react";
import "./LogoWrapper.css";

class LogoWrapper extends React.Component {
  render() {
    const { frame, a999PieceCustomA, className } = this.props;

    return (
      <div className={`logo-wrapper-1 ${className || ""}`}>
        <img className="frame-1" src={frame} />
        <div className="a-999-piece-custom-a-1 textxl">{a999PieceCustomA}</div>
      </div>
    );
  }
}

export default LogoWrapper;
