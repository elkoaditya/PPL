import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import BackgroundSlider from 'react-background-slider';

//Importing Modal
import ModalSection from '../../components/common/ModalSection';

//Import Images
import image1 from "../../assets/images/bg.jpg";
import image2 from "../../assets/images/bg-2.jpg";
import image3 from "../../assets/images/bg-3.jpg";

class Section extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
        this.callModal.bind(this)
    }

    callModal = () => {
        this.refs.child.openModal();
    }
    
    render() {
        return (
            <React.Fragment>
                <BackgroundSlider
            images={[image1, image2, image3]}
            duration={5} transition={2}
        />
        <section className="home-height-half" id="home">
            <div className="bg-overlay-gredient"></div>
            <div className="home-center">
                <div className="home-desc-center">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="10" className="text-center">
                                <h6 className="home-title text-white">We help startups launch their products</h6>
                                <p className="pt-4 home-sub-title text-white mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className="watch-video pt-4">
                                <Link onClick={this.callModal} to="#" className="video-play-icon text-white"><i className="mdi mdi-play play-icon-circle play play-iconbar"></i> <span>Watch The Video!</span></Link>
                                </div>
                            </Col>
                        </Row>
                        {/* Render ModalSection Component for Modal */}
                        <ModalSection ref="child" channel='vimeo' videoId='99025203' />
                    </Container>
                </div>
            </div>
        </section>
            </React.Fragment>
        );
    }
}

export default Section;