import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Particles
import Particles from 'react-particles-js';

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
        <section className="bg-home" id="home">
            <div className="bg-overlay">
            <Particles
                                params={{
                                    "particles": {
                                        "number": {
                                            "value": 110
                                        },
                                        "size": {
                                            "value": 4
                                        }
                                    },
                                    "interactivity": {
                                        "events": {
                                            "onhover": {
                                                "enable": true,
                                                "mode": "repulse"
                                            }
                                        }
                                    },
                                    "move" : {
                                        "radius" : 1
                                    }
                                }}
                            />
            </div>
            <div className="home-center">
                <div className="home-desc-center">
                    <Container className="slidero">
                        <Row>
                            <Col lg="10" className="text-left">
                                <h6 className="home-title text-white">Wellcome to Leaderboards System for Games</h6>
                                <p className="pt-4 home-sub-title text-white">Kami Akan Merekap hasil dari Game - Game yang Anda mainkan untuk memantau atau melihat perkembangan dan status keahliahn game kalian secara publik</p>
                                <div className="watch-video pt-4">
                                {/*<Link onClick={this.callModal} to="#" className="video-play-icon text-white"><i className="mdi mdi-play play-icon-circle play play-iconbar"></i> <span>Show Leaderboards</span></Link>*/}
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