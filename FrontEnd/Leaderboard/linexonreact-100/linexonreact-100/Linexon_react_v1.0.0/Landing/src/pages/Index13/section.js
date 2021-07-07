import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Slick Slider
import Slider from "react-slick";

//Import Slick Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Importing Modal
import ModalSection from '../../components/common/ModalSection';

class Section extends Component {
    constructor() {
        super();
        this.state = {
            slides : [
                { title : "We help startups launch their products", id : "99025203",channel : "vimeo", desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                { title : "Professional Landing Page Template",id : "99025203",channel : "vimeo", desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                { title : "Professional, Multipurpose Landing Page",id : "99025203",channel : "vimeo", desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            ],
            isOpen: false,
            id: "",
            channel : ""
        }
        this.callModal.bind(this)
    }

    callModal = (id, channel) => {
        this.setState({id : id, channel : channel});
        this.refs.child.openModal();
    }
    
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 1500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            arrows : false,
            autoplaySpeed : 3000,
            autoplay : true
          };
        return (
            <React.Fragment>
                <section className="bg-home home-height-half" id="home">
                    <div className="bg-overlay"></div>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <Container>
                                <Row className="justify-content-center">
                                    <Col lg="10" className="text-center">
                                        <div className="main-slider">
                                            <ul className="slides">
                                            <Slider {...settings}>
                                                {
                                                    this.state.slides.map((slide, key) =>
                                                    <li key={key}>
                                                        <h6 className="home-title text-white">{slide.title}</h6>
                                                        <p className="pt-4 home-sub-title text-white mx-auto">{slide.desc}</p>
                                                        <div className="watch-video pt-4">
                                                        <Link onClick={() => this.callModal(slide.id, slide.channel)} to="#" className="video-play-icon text-white"><i className="mdi mdi-play play-icon-circle play play-iconbar"></i> <span>Watch The Video!</span></Link>
                                                        </div>
                                                    </li>
                                                    )
                                                }
                                                
                                            </Slider>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                                {/* Render ModalSection Component for Modal */}
                            <ModalSection ref="child" channel={this.state.channel} videoId={this.state.id} />
                            </Container>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;