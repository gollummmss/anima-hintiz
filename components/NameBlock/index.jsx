import React from "react";
import FirstName from "../FirstName";
import "./NameBlock.css";

class NameBlock extends React.Component {
  render() {
    const { firstName1Props, firstName2Props } = this.props;

    return (
      <div className="x-block">
        <FirstName
          firstName={firstName1Props.firstName}
          yourFirstName={firstName1Props.yourFirstName}
          className={firstName1Props.className}
        />
        <FirstName
          firstName={firstName2Props.firstName}
          yourFirstName={firstName2Props.yourFirstName}
          className={firstName2Props.className}
        />
      </div>
    );
  }
}

export default NameBlock;
