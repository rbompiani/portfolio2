import React from "react";
import "./Navbar.css";
import {Route, Link} from 'react-router-dom';

class Navbar extends React.Component {
    render(){
        return(
            <header>
                    <Link to="/"><h1>Rebecca Bompiani</h1></Link>
                <nav>
                    <ul>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Resume</li>
                    </ul>
                </nav>
            </header>
        )         
    }
}

export default Navbar;