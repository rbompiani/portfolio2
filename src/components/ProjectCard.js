import React from "react";
import SkillBubble from "./SkillBubble";
import "./ProjectCard.css"
import {Link} from "react-router-dom";


/* project card component */
class ProjectCard extends React.Component{

    render(){
        return(
            <Link to={"/projects/"+ this.props.id}>
                <article className={`card ${this.props.major_skill}`}>
                        <div className="image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}images/projects/${this.props.img[0]})` }}></div>
                        <div className="snapshot">
                            <h2 className="light">{this.props.title}</h2>
                            <p className="light">{this.props.short_desc}</p>
                            <p className="light bold right">More <i class="fas fa-long-arrow-alt-right"></i> </p>  
                        </div>
                        <div className="skillBlock">
                            {this.props.skills.map((s, idx) => {
                                return (<SkillBubble skill={s} key={idx}/>)
                            })}
                        </div>
                </article>                
            </Link>

        )            
    }
}

export default ProjectCard;