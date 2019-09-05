import React from "react";
import "./LargeProject.css";
import Slide from "./Slide";
import projectData from "../projectData";


class LargeProject extends React.Component {
    state = {};

    componentWillMount(){
        const selectedProj = projectData.projects.find(proj => {return proj.id==this.props.match.params.id});
        this.setState(selectedProj);
    };
    
    render(){
        return (
            <div class="slideshow-container">
                {this.state.img.map(img =>{
                    return (<Slide img={img} />);
                })}
            </div>

        )        
    }

}

export default LargeProject;