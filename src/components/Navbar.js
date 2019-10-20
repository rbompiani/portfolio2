import React from "react";
import "./Navbar.css";
import DrawerButton from "./DrawerButton";
import {Route, Link} from 'react-router-dom';

const Navbar = props => {
        return(
            <header>
                    <Link to="/"><h1>Rebecca Bompiani</h1></Link>
                <nav>
                    <DrawerButton click={props.drawerClickHandler}/>
                </nav>
            </header>
        )         
}

export default Navbar;