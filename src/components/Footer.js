import React from "react";
import "./Footer.css";

function Footer(){
    return(
        <footer>
            <a href="https://www.linkedin.com/in/bompiani/" target="new">
                <img src={process.env.PUBLIC_URL+"/images/linkedin.svg"} className="social" />
            </a>
            <a href="https://www.instagram.com/bompiani/" target="new">
                <img src={process.env.PUBLIC_URL+"/images/instagram.svg"} className="social" />
            </a>
            <a href="https://github.com/rbompiani" target="new">
                <img src={process.env.PUBLIC_URL+"/images/github.svg"} className="social" /> 
            </a>                    
            <a href="mailto:info@rbompiani.com">
                <img src={process.env.PUBLIC_URL+"/images/email.svg"} className="social" />
            </a>                       
        </footer>        
    )
}

export default Footer;
