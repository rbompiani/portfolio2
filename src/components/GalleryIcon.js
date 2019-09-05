import React from "react";
import {Link} from "react-router-dom";
import "./GalleryIcon.css";

function GalleryIcon () {
    return (
        <span className="galleryIcon">
        <Link to={"/"}>

            <p className="projectLinksText">Gallery </p>
            <i class="fas fa-undo-alt"></i>
        </Link> 
    </span>
    )

}

export default GalleryIcon;