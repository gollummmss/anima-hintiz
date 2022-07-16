import React from "react";
import "./ContentWrapper22.css";

class ContentWrapper22 extends React.Component {
  render() {
    const { hint, asSeniorProductDe, className } = this.props;

    return (
      <div className={`content-wrapper-10 ${className || ""}`}>
        <div className="hint fjallaone-normal-silver-30px">{hint}</div>
        <div className="as-senior-product-de fjallaone-normal-silver-28px">{asSeniorProductDe}</div>
      </div>
    );
  }
}

export default ContentWrapper22;
