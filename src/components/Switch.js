import React from "react";
import "./Switch.css"

function Switch() {
    return (
        <label className="switch">
            <input type="checkbox" checked={checked}></input>
            <span className={`${skill.toLowerCase()} slider round` } ></span>
        </label>
    )
}