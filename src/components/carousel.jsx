import React, { Component } from "react";
import Carrysel from "react-bootstrap/Carousel";

class Carousel extends Component {
  render() {
    // TODO: ensure that pictures are auto resized before they get here
    return (
      <div className="carousel">
        <Carrysel>
          <Carrysel.Item>
            <img
              className="d-block w-10"
              src="https://access.redhat.com/documentation/en-US/Fuse_ESB_Enterprise/7.1/html/EIP_Transaction_Guide/files/images/intro_to_txn_01.gif"
              alt="First slide"
            />
          </Carrysel.Item>
          <Carrysel.Item>
            <img
              className="d-block w-10"
              src="https://t1.ftcdn.net/jpg/00/89/68/46/400_F_89684624_F5qxUjEEIcuXtXYVGjPE82gheEUbnF5t.jpg"
              alt="Third slide"
            />
          </Carrysel.Item>
          <Carrysel.Item>
            <img
              className="d-block w-10"
              src="https://static.businessinsider.com/image/52cd72fc69bedd5b311099ec-750.jpg"
              alt="Third slide"
            />
          </Carrysel.Item>
        </Carrysel>
      </div>
    );
  }
}
export default Carousel;
