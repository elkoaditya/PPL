import React, {Component, useState} from "react";
import { Container, Row, Col } from "reactstrap";

//Import Components
import SectionTitle from "../../components/common/section-title";

//Import Images
import img1 from "../../assets/images/fly1.png";
import img2 from "../../assets/images/features/mockup2.png";
import FeatureBox from "../common/feature-box";

class Features extends Component {

  render() {
    return (
      <React.Fragment>
        <section className="section" id="features">
          <Container>
            <SectionTitle title1="List" title2="Game" />
            <Row className="mt-4 pt-4 vertical-content">
              <Col lg="6" className="mt-2">
                <div>
                  <img
                    src={img1}
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </Col>
              <Col lg="6" className="mt-2 text-center">
                <FeatureBox
                  class=""
                  title="Flappy Bird Online"
                  desc="Game merupakan game Arcede Bertipe Sedikit Susah, Cara bermain game ini adalah melakakun klick pada gambar dengan akurasi yang cukup tinggi"
                  link="/flappy"
                />
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Features;
