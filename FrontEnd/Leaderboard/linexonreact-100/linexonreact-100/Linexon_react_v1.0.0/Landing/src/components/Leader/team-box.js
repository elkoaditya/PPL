import React, { Component } from 'react';
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

class TeamBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.members.map((member, key) =>
                        <Col lg="3" className="mt-3" key={key}>
                            <div className="team-box p-4">
                                <div className="team-img">
                                    <img src={member.image} alt="" className=" mx-auto d-block rounded-circle" height="124"/>
                                </div>
                                <div className="team-desc text-center mt-5">
                                    <h6 className="team-name text-uppercase text-custom mb-1">{member.name}</h6>
                                    <p className="team-work text-muted">{member.post}</p>
                                </div>
                                <ul className="list-inline team-social mt-4 mb-0 text-center">
                                    {
                                        member.socials.map((social, key) =>
                                        <li key={key} className="list-inline-item"><Link to={social.link}><i className={social.class}></i></Link></li>
                                        )
                                    }                                    
                                </ul>
                            </div>
                        </Col>
                    )
                } 
            </React.Fragment>
        );
    }
}

export default TeamBox;