import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Service Box
import ServiceBox from "./service-box";

class Services extends Component {
    state = {
        services : [
            { title : "React Js", icon : "mbri-code", description : "Disusun Menggunakan React js atau JavaScript sehingga sangat ringan dan efektif" },
            { title : "BackEnd & Frontend", icon : "mbri-drag-n-drop2", description : "Website ini menggunakan BackEnd & FrontEnd yang berbeda sehingga memiliki sistem yang ringan dan fleksibel" },
            { title : "Laravel Backend", icon : "mbri-setting", description : "Menggunakan Backend Laravel sehingga sangat aman dan cepat" },
        ],
        services1 : [
            { title : "Google Cloud Service", icon : "mbri-globe", description : "Menggunakan Google Service sehingga sangat efektif dan stabil" },
            { title : "CDN Service", icon : "mbri-rocket", description : "Menggunakan CDN yang premium Sehingga Miningkatkan kecepetan akses truma pada javascript" },
            { title : "Responsif", icon : "mbri-layers", description : "Dapat digunakan dimana saja baik di Hp leptop jenis apapun." },
        ],
        
    }
    render() {
        return (
            <React.Fragment>
        <section id="service" className="section">
            <Container>
            <SectionTitle title1="Feture " title2="Kami" />
                <Row className="pt-4 mt-4">
                <ServiceBox services={this.state.services} />
                </Row>
                <Row>
                <ServiceBox services={this.state.services1} />
                </Row>
            </Container>
        </section>
            </React.Fragment>
        );
    }
}

export default Services;