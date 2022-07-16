import React from "react";
import "./ContentWrapper2.css";

class ContentWrapper2 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`content-wrapper-6 ${className || ""}`}>
        <div className="bespoke-service-desi fjallaone-normal-snow-drift-55px">
          <span className="span-4 fjallaone-normal-snow-drift-55px">
            BESPOKE SERVICE
            <br />
          </span>
          <span className="span-4 fjallaone-normal-snow-drift-16px">
            Design and own your digital and physical eyewear with our bespoke service
          </span>
        </div>
      </div>
    );
  }
}

export default ContentWrapper2;
