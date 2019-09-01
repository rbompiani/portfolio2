import React from "react";
import Summary from "./Summary";
import About from "./About";
import Proficiencies from "./Proficiencies";
import {Route} from 'react-router-dom';

class Aside extends React.Component {
    render(){
        return(
            <aside>
                <header>
                    <h1>Rebecca Bompiani</h1>
                </header>
                <Route path="/" exact component={About} />
                <Route path="/projects/:id" component={Summary} />
                <Route path="/" exact component={Proficiencies} />
            </aside>  
        )         
    }
}

export default Aside;