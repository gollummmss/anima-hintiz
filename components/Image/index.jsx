import React from "react";
import "./Image.css";

class Image extends React.Component {
  render() {
    const { src } = this.props;

    return (
      <div className="image-4">
        <img className="bg-1" src={src} />
      </div>
    );
  }
}

export default Image;
