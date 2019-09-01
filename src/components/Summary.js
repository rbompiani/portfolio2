import React from "react";
import projectData from "../projectData";
import SkillName from "./SkillName";
import "./Summary.css";



class Summary extends React.Component{

    state={};

    componentWillMount(){
        const selectedProj = projectData.projects.find(proj => {return proj.id==this.props.match.params.id});
        this.setState(selectedProj);
    }



    render(){
        return(
            <section>
                {console.log(this.state.skills)}
                <h2>{this.state.title}</h2>
                <p>{this.state.long_desc}</p>

                <h2>Project Links</h2>
                <div className="projectLinksContainer">
                    <a href={this.state.demo} target="new">
                        <img className="projectLinks" src={process.env.PUBLIC_URL+"/images/earth.svg"} /> 
                    </a>
                    <a href={this.state.github} target="new">
                        <img className="projectLinks" src={process.env.PUBLIC_URL+"/images/github.svg"} /> 
                    </a>                    
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