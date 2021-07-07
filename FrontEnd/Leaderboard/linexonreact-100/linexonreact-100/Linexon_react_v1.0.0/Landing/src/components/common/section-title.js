import React, { Component } from 'react';
import { Row, Col } from "reactstrap";

class SectionTitle extends Component {
    render() {
        return (
            <React.Fragment>
                <Row className="justify-content-center">
                    <Col lg="6">
                        <div className="title text-center">
                            <h2>{this.props.title1} <b>{this.props.title2}</b></h2>
                            <span className="title-border"><i className="mdi mdi-set-none"></i></span>
                        </div>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default SectionTitle;