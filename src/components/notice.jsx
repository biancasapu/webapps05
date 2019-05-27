import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class Notice extends Component {
  render() {
    const {
      big,
      id,
      name,
      picture,
      description = "Hello I lost my dog",
      details = "Phone: +447521244348"
    } = this.props;

    return (
      <div key={id} style={{ marginBottom: "20px" }}>
        <Card>
          <Row>
            <Col sm="4">
              <CardImg
                top
                style={{
                  width: "100%",
                  borderRadius: "5%"
                }}
                src={"https://picsum.photos/200"}
              />
            </Col>
            <Col sm="4">
              <CardImg
                top
                style={{ width: "100%", borderRadius: "5%", margin: "10" }}
                src={"https://picsum.photos/200"}
              />
              {/* <img
                  className="card-img round-corners mb-4 cardPic"
                  src={"https://picsum.photos/200"}
                  alt={"Picture of " + name}
                /> */}
            </Col>
            <Col sm="4">
              <CardImg
                top
                style={{ width: "100%", borderRadius: "5%" }}
                src={"https://picsum.photos/200"}
              />
              {/* <img
                  className="card-img round-corners mb-4 cardPic"
                  src={"https://picsum.photos/200"}
                  alt={"Picture of " + name}
                /> */}
            </Col>
          </Row>
          <CardBody>
            <CardTitle>Lost Dog</CardTitle>
            <CardSubtitle>whatever</CardSubtitle>
            <CardText>Address n shit</CardText>
            <Button>Help!</Button>
          </CardBody>
        </Card>
      </div>
      //         <div className="card-text cardDescription">
      //           <p className="col" style={{ height: "40px" }}>
      //             {description}
      //             <br /> {details}
      //           </p>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
    );
  }
}

export default Notice;
