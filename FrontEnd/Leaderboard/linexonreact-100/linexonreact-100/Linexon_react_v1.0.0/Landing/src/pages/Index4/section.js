import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import ReactTextRotator from 'react-text-rotator';

//Importing Modal
import ModalSection from '../../components/common/ModalSection';

const RotateComponent = () => (

    <ReactTextRotator
      content={content}
      time={5000}
      startDelay={2000}
    />
);

const content = [
    {
        text: 'We help startups launch their products',
        animation: 'fade',
    },
    {
        text: 'Create amazing landing page with linexon',
        animation: 'fade',
    },
    {
        text: 'Perfact solution for small businesses',
        animation: 'fade',
    },
];

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
                                            <div className="text-rotate">
                                                <RotateComponent/>
                                            </div>
                                        </h6>
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