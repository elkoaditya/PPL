import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import Typist from 'react-typist';

//Importing Modal
import ModalSection from '../../components/common/ModalSection';

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
        <section className="bg-home home-height-half" id="home">
            <div className="bg-overlay"></div>
            <div className="home-center">
                <div className="home-desc-center">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="10" className="text-center">
                                <h6 className="home-title text-white">
                                <Typist>
                                <span> Professional Landing Page Template </span>
                                <Typist.Backspace count={49} delay={200} />
                                <span className="element"> We are Creative </span>
                                <Typist.Backspace count={16} delay={200} />
                                <span className="element"> We are Modern </span>
                                </Typist></h6>
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