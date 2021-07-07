import React, { Component } from 'react';
import NavbarPage from "../../components/Navbar/Navbar_Page";
import Section from "./section.js";
import Footer from '../../components/Footer/footer';
import Features from '../../components/Features/features';
import Services from '../../components/Services/services';
import OurTeam from '../../components/Team/our-team';
import Leaderku from "../../components/Leader/Leaderku";

class Leader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pos : document.documentElement.scrollTop,
            imglight : true,
            navClass : ""
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var scrollup=document.documentElement.scrollTop;
        if(scrollup > this.state.pos)
        {
            this.setState({navClass : "darkheader", imglight : false});
        }
        else
        {
            this.setState({navClass : "", imglight : true});
        }
    };

    render() {
        return (
            <React.Fragment>

                {/* Importing Navbar */}
                <NavbarPage navclass={this.state.navClass} imglight={this.state.imglight} />

                {/* import section */}
                {/*<Section/>*/}

                {/* import section */}
                {/*<Features/>*/}

                {/* import services */}
                {/*<Services/>*/}

                {/* import clients */}
                {/*<Clients />*/}

                {/* imprtr team */}
                <Leaderku/>

                {/* import pricing */}
                {/*<Pricing />*/}

                {/* import get in touch */}
                {/*<GetInTouch/>*/}

                {/* Importing Get Footer */}
                <Footer/>

            </React.Fragment>
        );
    }
}

export default Leader;