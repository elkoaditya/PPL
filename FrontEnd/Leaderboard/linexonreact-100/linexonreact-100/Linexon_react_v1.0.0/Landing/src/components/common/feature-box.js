import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FeatureBox extends Component {
    render() {
        return (
           <React.Fragment>
                                <div className={"features-desc " + this.props.class}>
                                    <h2>{this.props.title}</h2>
                                    <div className="features-border mx-auto mt-3"></div>
                                    <p className="text-muted mt-3">{this.props.desc}</p>
                                    <Link to={this.props.link} className="">Leaderboards<i className="mdi mdi-chevron-right"></i></Link>
                                </div>
           </React.Fragment>
        );
    }
}

export default FeatureBox;