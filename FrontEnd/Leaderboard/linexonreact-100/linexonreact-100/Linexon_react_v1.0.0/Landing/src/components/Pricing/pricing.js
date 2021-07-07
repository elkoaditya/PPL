import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Pricing
import PricingBox from './pricing-box';

class Pricing extends Component {
    state = {
        pricings : [
            { id : 1, title : "Free", price : "0", duration : "m",
                features : 
                    { bandwith : "1GB", onlinespace : "50MB", support : "No", domain : "-", hiddenFees : "-" }
                
            },
            { id : 2, title : "Economy", price : "19", duration : "m",
                features : 
                    { bandwith : "1GB", onlinespace : "500MB", support : "Yes", domain : "5 Domain5", hiddenFees : "-" }
                
            },
            { id : 3, title : "Deluxe", price : "29", duration : "m",
                features : 
                    { bandwith : "1GB", onlinespace : "2GB", support : "Yes", domain : "10 Domain", hiddenFees : "No Hidden Fees" }
                
            },
        ]
    }
    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="pricing">
                    {/*<Container>*/}
                    {/*<SectionTitle title1="Our" title2="Pricing" />*/}
                    {/*    <Row className="mt-4 pt-4">*/}
                    {/*        <PricingBox pricings={this.state.pricings} />*/}
                    {/*    </Row>*/}
                    {/*</Container>*/}
                </section>
            </React.Fragment>
        );
    }
}

export default Pricing;