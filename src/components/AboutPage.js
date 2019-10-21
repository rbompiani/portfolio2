import React from "react";
import About from "./About";
import Footer from "./Footer";
import Proficiencies from "./Proficiencies";
import "./AboutPage.css";

class AboutPage extends React.Component {
    render(){
        return(
            <div className="aboutMain">
                <About />
                <Proficiencies />
                <Footer />
            </div>  
        )         
    }
}

export default AboutPage;