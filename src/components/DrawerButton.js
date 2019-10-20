import React from "react";
import "./DrawerButton.css";

const DrawerButton =  props => (
    <button className="drawer-button" onClick={props.click}>
        <div className="drawer-button_line" />
        <div className="drawer-button_line" />
        <div className="drawer-button_line" />
    </button>
);

export default DrawerButton;