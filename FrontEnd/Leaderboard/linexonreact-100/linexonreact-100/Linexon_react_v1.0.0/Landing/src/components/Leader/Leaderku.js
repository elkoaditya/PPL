import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Components
import SectionTitle from "../../components/common/section-title";

//Import Team Box
import TeamBox from "./team-box";

//Import Images
import team1 from "../../assets/images/org.png";
import team2 from "../../assets/images/novita.png";
import team3 from "../../assets/images/rudy.png";
import team4 from "../../assets/images/dody.png";
import team5 from "../../assets/images/ken.png";
import axios from 'axios';

class Leaderku extends Component {
    state = {
        members : [
            
        ],
        persons : []
    }
    componentDidMount() {
        axios.get(`https://api.flappybird.gosystem.xyz/api/leaderboard/get`)
            .then(res => {
                const members = [];
                const persons = res.data;

                Object.keys(res.data.items).map(t => {
                    members.push({ id : 1, name : res.data.items[t].name, image : team1, post : `Point : ${res.data.items[t].point}`,
                        socials : [
                            { class : "mdi mdi-facebook", link : "#" },
                            { class : "mdi mdi-google", link : "#" },
                            { class : "mdi mdi-twitter", link : "#" },
                        ]
                    },)
                })

                this.setState({ members });
                console.log(persons)
            })
    }

    render() {
        return (
            <React.Fragment>
                <section className="section" id="team">
                    <Container>
                        <SectionTitle title1="Leaderboards" title2="Flappy Birds" />
                        <Row className="mt-4 pt-4">
                            <TeamBox members={this.state.members} />
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Leaderku;