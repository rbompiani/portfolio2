import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectData from "../projectData";

class ProjectGrid extends React.Component {
    state = ProjectData;

    render(){
        return (
            <div id="projectGrid">
                {this.state.projects.map((p, pnum) =>{
                    return (
                        
                        <ProjectCard 
                            major_skill={p.major_skill} 
                            img={p.img} title={p.title} 
                            short_desc={p.short_desc} 
                            skills={p.skills}
                            id={p.id} 
                            key={pnum} 
                        />

                    )
                })}  
            </div>
        )
    }
}

export default ProjectGrid;