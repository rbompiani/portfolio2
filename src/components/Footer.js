import React from "react";

function Footer(){
    return(
        <footer>
            <a href="https://www.linkedin.com/in/bompiani/" target="new">
                <img class="social" src={process.env.PUBLIC_URL+"images/linkedin.svg"} className="social" />
            </a>
            <a href="https://www.instagram.com/bompiani/" target="new">
                <img class="social" src={process.env.PUBLIC_URL+"images/instagram.svg"} className="social" />
            </a>
            <a href="https://github.com/rbompiani" target="new">
                <img class="social" src={process.env.PUBLIC_URL+"images/github.svg"} className="social" /> 
            </a>                    
            <a href="mailto:info@rbompiani.com">
                <img class="social" src={process.env.PUBLIC_URL+"images/email.svg"} classNAme="social" />
            </a>                       
        </footer>        
    )
}

export default Footer;
