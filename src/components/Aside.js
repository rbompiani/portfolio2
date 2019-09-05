import React from "react";
import Summary from "./Summary";
import About from "./About";
import Footer from "./Footer";
import Proficiencies from "./Proficiencies";
import "./Aside.css";
import {Route, Link} from 'react-router-dom';

class Aside extends React.Component {
    render(){
        return(
            <aside>
                <header>
                    <Link to="/"><h1>Rebecca Bompiani</h1></Link>
                </header>
                <Route path={["/","/resume"]} exact component={About} />
                <Route path={["/","/resume"]} exact component={Proficiencies} />
                <Route path="/projects/:id" component={Summary} />
                <Footer />
            </aside>  
        )         
    }
}

export default Aside;