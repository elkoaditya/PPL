import React, { Component } from 'react';
import NavbarPage from "../../components/Navbar/Navbar_Page";
import Section from "./section";
import Footer from '../../components/Footer/footer';
import Features from '../../components/Features/features';
import GetStarted from "../../components/Get Started/get-started";
import Services from '../../components/Services/services';
import Clients from '../../components/Clients/clients';
import OurTeam from '../../components/Team/our-team';
import Pricing from '../../components/Pricing/pricing';
import GetInTouch from '../../components/Get in Touch/get-in-touch';

class Index11 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pos : document.documentElement.scrollTop,
            imglight : false,
            navClass : "navbar-light",
            isFixed : false,
            sectionHeight : 0,
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
        window.addEventListener("resize", this.updateSectionHeight, true);
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.scrollNavigation, true);
        window.removeEventListener("resize", this.updateSectionHeight, true);
    }

    scrollNavigation = () => {
        var scrollup=document.documentElement.scrollTop;
        var scrollup2=document.documentElement.scrollTop;
        if(scrollup >= 50)
        {
            this.setState({navClass : "navbar-light darkheader small", imglight : false});
        }
        else
        {
            this.setState({navClass : "navbar-light", imglight : false});
        }

        var height = document.getElementById('home').clientHeight;
        this.setState({ sectionHeight : height });
        
        if( scrollup2 >= this.state.sectionHeight ){
            this.setState({isFixed : true})
            document.getElementById("topnav").style.position="fixed";
            document.getElementById("topnav").style.top="0px";
        }
        else {
            this.setState({isFixed : false})
            document.getElementById("topnav").style.position="static";
            document.getElementById("topnav").style.top=this.state.sectionHeight+"px";
        }
    };

    updateSectionHeight = () => {
        var height = document.getElementById('home').clientHeight;
        this.setState({ sectionHeight : height });
    }

    render() {
        return (
            <React.Fragment>

                {/* import section */}
                <Section/>
                
                {/* Importing Navbar */}
                <NavbarPage navclass={this.state.navClass} imglight={this.state.imglight} isNotSticky={true} /> 
                
                
                    
                {/* import section */}
                <Features/>
                
                {/* import get started */}
                <GetStarted />

                {/* import services */}
                <Services/>

                {/* import clients */}
                <Clients />

                {/* imprtr team */}
                <OurTeam/>

                {/* import pricing */}
                <Pricing />

                {/* import get in touch */}
                <GetInTouch/>

                {/* Importing Get Footer */}
                <Footer/>

            </React.Fragment>
        );
    }
}

export default Index11;