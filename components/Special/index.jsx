import React from "react";
import "./Special.css";

class Special extends React.Component {
  render() {
    const { claimYour3DPrinti } = this.props;

    return (
      <div className="special">
        <div className="overlap-group-7">
          <div className="ownership-1 alumnisans-semi-bold-white-55px">Ownership</div>
          <div className="claim-your-3-d-printi alumnisans-normal-white-28px">{claimYour3DPrinti}</div>
        </div>
      </div>
    );
  }
}

export default Special;
