import React from "react";
import Frame17 from "../Frame17";
import "./Acrd.css";

class Acrd extends React.Component {
  render() {
    const { className, frame17Props } = this.props;

    return (
      <div className={`acrd ${className || ""}`}>
        <Frame17 className={frame17Props.className}>{frame17Props.children}</Frame17>
        <img className="frame-16" src="/img/frame-16@2x.svg" />
      </div>
    );
  }
}

export default Acrd;
