import React from "react";
import "./ContentWrapper6.css";

class ContentWrapper6 extends React.Component {
  render() {
    const { spanText1, spanText2 } = this.props;

    return (
      <div className="content-wrapper-3">
        <div className="reward-earn-passive fjallaone-normal-snow-drift-55px">
          <span className="fjallaone-normal-snow-drift-55px">{spanText1}</span>
          <span className="fjallaone-normal-snow-drift-16px">{spanText2}</span>
        </div>
      </div>
    );
  }
}

export default ContentWrapper6;
