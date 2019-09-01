import React from "react";
import "./LargeProject.css";
import ProjectData from "../projectData";


class LargeProject extends React.Component {
    componentDidMount(){
        console.log("inside large project");
    };
    
    render(){
        return (
            <div id="selectedProject">
            </div>
        )        
    }

}

export default LargeProject;