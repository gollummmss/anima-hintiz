import React from "react";
import UniqueWrapper from "../UniqueWrapper";
import "./X999Wrappper.css";

class X999Wrappper extends React.Component {
  render() {
    const { uniqueWrapperProps } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="x999-wrappper screen">
          <UniqueWrapper
            specialProps={uniqueWrapperProps.specialProps}
            timelessProps={uniqueWrapperProps.timelessProps}
          />
        </div>
      </div>
    );
  }
}

export default X999Wrappper;
