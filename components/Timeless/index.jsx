import React from "react";
import "./Timeless.css";

class Timeless extends React.Component {
  render() {
    const { vipAccess } = this.props;

    return (
      <div className="timeless">
        <div className="vip-access alumnisans-semi-bold-white-55px">{vipAccess}</div>
        <div className="access-piys-nft-eyew alumnisans-normal-white-28px">
          Access PIYS NFT eyewear platform
          <br />
          <br />
          Bespoke service
        </div>
      </div>
    );
  }
}

export default Timeless;
