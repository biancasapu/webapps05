import React, { Component } from "react";
import Notice from "./Notice";
class Notices extends Component {
  renderNotice() {
    return <Notice />;
  }
  render() {
    return (
      <div className="List of Notices">
        {this.renderNotice()}
        {this.renderNotice()}
      </div>
    );
  }
}

export default Notices;
