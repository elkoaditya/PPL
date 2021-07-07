import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Col } from "reactstrap";

class PricingBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.pricings.map((pricing, key) =>
                        <Col lg="4" key={key} className="mt-3">
                            <div className="pricing-box bg-white text-center p-4">
                                <div className="plan-title mt-3 mb-4">
                                    <h5 className="mb-0">{pricing.title}</h5>
                                </div>
                                <div className="plan-price">
                                    <h6>${pricing.price}<span>/{pricing.duration}</span></h6>
                                </div>
                                <div className="plan-features mt-4 mb-4">
                                    <p>Bandwidth: {pricing.features.bandwith}</p>
                                    <p>Onlinespace: {pricing.features.onlinespace}</p>
                                    <p>Support: {pricing.features.support}</p>
                                    <p>{pricing.features.domain}</p>
                                    <p className="mb-0">{pricing.features.hiddenFees}</p>
                                </div>
                                <div className="mb-4">
                                    <Link to="#" className="btn btn-custom">Join Now</Link>
                                </div>
                            </div>
                        </Col>
                    )
                }
            </React.Fragment>
        );
    }
}

export default PricingBox;