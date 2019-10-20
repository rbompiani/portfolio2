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
                </nav>
            </header>
        )         
    }
}

export default Navbar;