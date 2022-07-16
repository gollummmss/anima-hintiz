import React from "react";
import ContentWrapper from "../ContentWrapper";
import ContentWrapper2 from "../ContentWrapper2";
import ContentWrapper3 from "../ContentWrapper3";
import "./CrystalContentWrapper.css";

class CrystalContentWrapper extends React.Component {
  render() {
    const { physical, contentWrapperProps, contentWrapper2Props, contentWrapper3Props } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="crystal-content-wrapper screen">
          <div className="physical-2 fjallaone-normal-snow-drift-100px">{physical}</div>
          <ContentWrapper className={contentWrapperProps.className} />
          <ContentWrapper2 className={contentWrapper2Props.className} />
          <ContentWrapper3 className={contentWrapper3Props.className} />
        </div>
      </div>
    );
  }
}

export default CrystalContentWrapper;
