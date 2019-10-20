import React from "react";
import "./Navbar.css";
import {Route, Link} from 'react-router-dom';

class Aside extends React.Component {
    render(){
        return(
            <header>
                    <Link to="/"><h1>Rebecca Bompiani</h1></Link>
                <nav>
                    nav
                </nav>
            </header>
        )         
    }
}

export default Aside;