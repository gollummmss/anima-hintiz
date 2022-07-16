import React from "react";
import "./FirstName.css";

class FirstName extends React.Component {
  render() {
    const { firstName, yourFirstName, className } = this.props;

    return (
      <div className={`first-name textsmall-regular ${className || ""}`}>
        <div className="first-name-1">{firstName}</div>
        <div className="placeholder-wrapper-1 border-1px-blackblack-700">
          <div className="your-first-name">{yourFirstName}</div>
        </div>
      </div>
    );
  }
}

export default FirstName;
