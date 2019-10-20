import React from "react";
import {Link} from "react-router-dom";

function About(){
    return(
    <section>
        <h2>About</h2>
        <p>
            An architect turned full stack developer, I’m as passionate about user experience as I am about clean and responsive code. 
            I'm dedicated to creating engaging and intuitive interactions that promote early adoption and repeat usage.
        </p>
        <Link to={"/resume"}>
            <p className="bold right"> 
                 Resume <i className="fas fa-long-arrow-alt-right"></i> 
            </p>
        </Link>
    </section>  
    )
}

export default About;
