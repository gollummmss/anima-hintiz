import React from "react";
import Special from "../Special";
import Timeless from "../Timeless";
import "./UniqueWrapper.css";

class UniqueWrapper extends React.Component {
  render() {
    const { specialProps, timelessProps } = this.props;

    return (
      <div className="unique-wrapper">
        <div className="special-concept">
          <Special claimYour3DPrinti={specialProps.claimYour3DPrinti} />
          <div className="concept">
            <div className="earn alumnisans-semi-bold-white-55px">Earn</div>
            <div className="earn-passive-income alumnisans-normal-white-28px">
              Earn passive income through commissioning your NFT on eyewear and collectable sales in our ecommerce and
              flagship store sales
              <br />
              <br />
              Receive token airdrops
            </div>
          </div>
        </div>
        <Timeless vipAccess={timelessProps.vipAccess} />
      </div>
    );
  }
}

export default UniqueWrapper;
