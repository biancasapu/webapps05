import React, { Component } from "react";
import Header from "./header";
import Notice from "./notice";
import { Row, Col } from "reactstrap";

class LostFoundPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Col md={{ size: 8, offset: 3 }}>
            <Row>
              <Notice />
            </Row>
            <Row>
              <Notice />
            </Row>
            <Row>
              <Notice />
            </Row>
          </Col>
        </div>
      </div>
    );
  }
}

export default LostFoundPage;
