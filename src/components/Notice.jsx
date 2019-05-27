import React, { Component } from "react";
import Carousel from "./carousel";
import BottomText from "./BottomText";

class Notice extends Component {
  renderCarousel() {
    return <Carousel />;
  }
  renderBottomText() {
    return <BottomText />;
  }
  render() {
    return (
      <div className="Notice">
        {this.renderCarousel()}
        {this.renderBottomText()}
      </div>
    );
  }
}

export default Notice;
