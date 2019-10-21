import React from "react";
import projectData from "../projectData";
import SkillName from "./SkillName";
import LinkIcon from "./LinkIcon";
import "./Summary.css";
import "./About.css";


class Summary extends React.Component{

    state={};

    componentWillMount(){
        const selectedProj = projectData.projects.find(proj => {return proj.id==this.props.match.params.id});
        this.setState(selectedProj);
    }

    render(){

        let gitHub;
        let demo;
        let wireframe;

        if (this.state.demo){
            demo = <LinkIcon type="demo" link={this.state.demo} />;
        }

        if (this.state.github){
            gitHub = <LinkIcon type="github" link={this.state.github} />;
        }

        if (this.state.wireframe){
            wireframe = <LinkIcon type="wireframe" link={this.state.wireframe} />
        }

        return(
            <section>
                <h2>{this.state.title}</h2>
                <p>{this.state.long_desc}</p>

                <h2>Project Links</h2>
                <div className="projectLinksContainer">
                    {demo}
                    {gitHub}
                    {wireframe}                   
                </div>

                <h2>Skills Used</h2>
                <div className="skillsUsed">
                    {this.state.skills.map((s, idx) => {
                        return (<SkillName skill={s} key={idx}/>)
                    })}
                </div>

            </section>  
        )        
    }
}

export default Summary;