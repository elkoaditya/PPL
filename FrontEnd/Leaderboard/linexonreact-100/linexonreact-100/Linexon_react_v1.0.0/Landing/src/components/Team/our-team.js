import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Components
import SectionTitle from "../../components/common/section-title";

//Import Team Box
import TeamBox from "./team-box";

//Import Images
import team1 from "../../assets/images/elko.png";
import team2 from "../../assets/images/novita.png";
import team3 from "../../assets/images/rudy.png";
import team4 from "../../assets/images/dody.png";
import team5 from "../../assets/images/ken.png";

class OurTeam extends Component {
    state = {
        members : [
            { id : 1, name : "Elko Aditya Dharma P. S.", image : team1, post : "A11.2018.10858",
                socials : [
                    { class : "mdi mdi-facebook", link : "#" },
                    { class : "mdi mdi-google", link : "#" },
                    { class : "mdi mdi-twitter", link : "#" },
                ]
            },
            { id : 2, name : "Novita", image : team2, post : "A11.2018.10851",
                socials : [
                    { class : "mdi mdi-facebook", link : "#" },
                    { class : "mdi mdi-google", link : "#" },
                    { class : "mdi mdi-twitter", link : "#" },
                ]
            },
            { id : 3, name : "Rudy Setiawan", image : team3, post : "A11.2018.11079",
                socials : [
                    { class : "mdi mdi-facebook", link : "#" },
                    { class : "mdi mdi-google", link : "#" },
                    { class : "mdi mdi-twitter", link : "#" },
                ]
            },
            { id : 4, name : "dhodhy darsono", image : team4, post : "A11.2018.11116",
                socials : [
                    { class : "mdi mdi-facebook", link : "#" },
                    { class : "mdi mdi-google", link : "#" },
                    { class : "mdi mdi-twitter", link : "#" },
                ]
            },
            { id : 5, name : "Kensa Sidarta", image : team5, post : "A11.2017.10307",
                socials : [
                    { class : "mdi mdi-facebook", link : "#" },
                    { class : "mdi mdi-google", link : "#" },
                    { class : "mdi mdi-twitter", link : "#" },
                ]
            },
        ]
    }
    render() {
        return (
            <React.Fragment>
        <section className="section" id="team">
            <Container>
                <SectionTitle title1="Tim" title2="Kami" />
                <Row className="mt-4 pt-4">
                    <TeamBox members={this.state.members} />
                </Row>
            </Container>
        </section>
            </React.Fragment>
        );
    }
}

export default OurTeam;