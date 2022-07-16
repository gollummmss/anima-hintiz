import React from "react";
import Acrd from "../Acrd";
import Acrd2 from "../Acrd2";
import "./Component1.css";

class Component1 extends React.Component {
  render() {
    const { acrd1Props, acrd21Props, acrd22Props, acrd2Props } = this.props;

    return (
      <div className="component-1">
        <Acrd frame17Props={acrd1Props.frame17Props} />
        <Acrd2 whatSAnNft={acrd21Props.whatSAnNft} />
        <Acrd2 whatSAnNft={acrd22Props.whatSAnNft} className={acrd22Props.className} />
        <Acrd className={acrd2Props.className} frame17Props={acrd2Props.frame17Props} />
      </div>
    );
  }
}

export default Component1;
