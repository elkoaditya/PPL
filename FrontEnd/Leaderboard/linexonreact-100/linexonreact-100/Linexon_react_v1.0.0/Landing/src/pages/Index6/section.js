import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from "reactstrap";
import BackgroundSlider from 'react-background-slider';

//Import Images
import image1 from "../../assets/images/bg.jpg";
import image2 from "../../assets/images/bg-2.jpg";
import image3 from "../../assets/images/bg-3.jpg";

class Section extends Component {
    
    render() {
        return (
            <React.Fragment>
        <section className="back-slide" id="home">
        <BackgroundSlider
            images={[image1, image2, image3]}
            duration={5} transition={2}
        />
            <div className="bg-overlay"></div>
            <div className="home-center">
                <div className="home-desc-center">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="10" className="text-center">
                                <h6 className="home-title text-white">A digital web studio creating stunning & engaging online experiences</h6>
                                <p className="pt-4 home-sub-title text-white mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className="text-center search-form mt-4">
                                    <Form action="#">
                                        <input type="text" placeholder="Email"/>
                                        <Button type="submit" className="btn btn-custom">SubCribe</Button>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </section>
            </React.Fragment>
        );
    }
}

export default Section;