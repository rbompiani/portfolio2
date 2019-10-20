import React from "react";
import "./SlideDrawer.css";
import {Link} from "react-router-dom";

const SlideDrawer = props => (
    <ul className="slide-drawer" onClick={props.drawerClickHandler}>
        <Link to={"/"}>
            <li>Projects</li>
        </Link>
        <Link to={"/about"}>
            <li>About</li>
        </Link>
        <Link to={"/resume"}>
            <li>Resume</li>
        </Link>
    </ul>
);

export default SlideDrawer;
