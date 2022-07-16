import React from "react";
import "./Acrd2.css";

class Acrd2 extends React.Component {
  render() {
    const { whatSAnNft, className } = this.props;

    return (
      <div className={`acrd-2 ${className || ""}`}>
        <div className="frame-17-2">
          <div className="whats-an-nft fjallaone-normal-white-26px">{whatSAnNft}</div>
        </div>
        <img className="frame-16-1" src="/img/frame-16@2x.svg" />
      </div>
    );
  }
}

export default Acrd2;
