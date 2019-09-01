import React from "react";
import "./Main.css";
import ProjectGrid from "./ProjectGrid";
import LargeProject from "./LargeProject";
import {Route} from "react-router-dom";

class Main extends React.Component{
    
    render(){
        return(
            <main>
                <Route path="/" exact component={ProjectGrid} />
                <Route path="/projects/:id" exact component={LargeProject} />
            </main>
            
        )                
    }
    
}

export default Main;