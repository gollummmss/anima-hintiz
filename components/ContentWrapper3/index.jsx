import React from "react";
import "./ContentWrapper3.css";

class ContentWrapper3 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`content-wrapper-8 ${className || ""}`}>
        <div className="collectables-3-d-prin fjallaone-normal-snow-drift-55px">
          <span className="span-6 fjallaone-normal-snow-drift-55px">
            COLLECTABLES
            <br />
          </span>
          <span className="span-6 fjallaone-normal-snow-drift-16px">
            3D printed miniature collectables produced in collaboration with world renouned artists
            <br />
            Priority to Hintiz NFT owners
          </span>
        </div>
      </div>
    );
  }
}

export default ContentWrapper3;
