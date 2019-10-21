import React from "react";
import "./LinkIcon.css";

const LinkIcon = props => (
    <a href={props.link} target="new">
        <img className="projectLinks" src={process.env.PUBLIC_URL+`/images/${props.type}.svg`} />
        <p className="projectLinksText">{props.type} </p>
        <i className="fas fa-long-arrow-alt-right"></i> 
    </a>
)

export default LinkIcon;