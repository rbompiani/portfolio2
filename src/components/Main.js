import React from "react";
import "./Main.css";
import ProjectGrid from "./ProjectGrid";
import LargeProject from "./LargeProject";
import Resume from "./Resume";
import AboutPage from "./AboutPage";
import Summary from "./Summary";
import {Route} from "react-router-dom";

class Main extends React.Component{
    
    render(){

        let projInfo;

        if(!this.props.isDesktop){
            projInfo = <div className="mobileWrapper"><Route path="/projects/:id" exact component={Summary} /></div>;
        }

        return(
            <main>
                <Route path="/" exact component={ProjectGrid} />
                {projInfo}
                <Route path="/projects/:id" exact component={LargeProject} />
                <Route path="/resume" exact component={Resume} />
                <Route path="/about" exact component={AboutPage} />
            </main>
        )                
    }
    
}

export default Main;