import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Label, Button } from "reactstrap";
import { AvForm, AvField } from 'availity-reactstrap-validation';

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
        <section className="home-half" id="home">
            <div className="bg-overlay"></div>
            <div className="home-center">
                <div className="home-desc-center">
                    <Container>
                        <Row className="vertical-content">
                            <Col lg="8" className="text-left mt-3">
                                <h6 className="home-title text-white">Create amazing landing page with linexon landing template</h6>
                                <p className="pt-4 home-sub-title text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation.</p>
                                <div className="watch-video pt-4">
                                    <Link onClick={this.callModal} to="#" className="video-play-icon text-white"><i className="mdi mdi-play play-icon-circle play play-iconbar"></i> <span>Watch The Video!</span></Link>
                                </div>
                            </Col>
                            <Col lg="4" className="mt-3">
                                <div className="home-registration-form bg-white p-5">
                                    <h4 className="form-title mb-4">Get 30 day FREE Trial</h4>
                                    <h5 className="text-muted form-subtitle mb-4">Enjoy your website, filled with the care about.</h5>
                                    <AvForm className="registration-form">
                                        <Label className="text-muted">First Name</Label>
                                        <AvField
                                                          name="firstname"
                                                          type="text"
                                                          errorMessage="Enter First Name"
                                                          className="form-control registration-input-box"
                                                          validate={{ required: { value: true } }}
                                                        />
                                        <Label className="text-muted">Email</Label>
                                        <AvField
                                                          name="email"
                                                          type="text"
                                                          errorMessage="Enter First Name"
                                                          className="form-control registration-input-box"
                                                          validate={{
                                                            required: { value: true },
                                                            email: { value: true }
                                                          }}
                                                        />
                                        <Button className="btn btn-custom w-100 text-uppercase">Send Data</Button>
                                    </AvForm>
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