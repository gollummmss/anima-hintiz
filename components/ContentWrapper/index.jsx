import React from "react";
import "./ContentWrapper.css";

class ContentWrapper extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`content-wrapper-4 ${className || ""}`}>
        <div className="ownership-own-a-phys fjallaone-normal-snow-drift-55px">
          <span className="span-2 fjallaone-normal-snow-drift-55px">
            OWNERSHIP
            <br />
          </span>
          <span className="span-2 fjallaone-normal-snow-drift-16px">Own a physical pair of Hintiz Eyewear</span>
        </div>
      </div>
    );
  }
}

export default ContentWrapper;
