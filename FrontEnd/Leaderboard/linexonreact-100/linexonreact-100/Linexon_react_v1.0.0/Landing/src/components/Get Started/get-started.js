import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class GetStarted extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="pt-5 pb-5 bg-custom">
          <Container>
            <Row>
              <Col md="9" className="text-white critarea-desc mt-3 mb-3">
                Become a part of Linexon bussiness community today
              </Col>
              <Col md="3" className="mt-3 mb-3 text-md-right">
                <a href="#home" className="btn btn-outline-custom">
                  Get Started
                </a>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default GetStarted;
