import React from "react";
import "./Main.css";
import ProjectCard from "./ProjectCard";

const projectData = {
    "projects": [
        {
            "id": 1,
            "title": "Project 1",
            "short_desc": "This is a short description of how the project functions",
            "long_desc": "This is a much longer description of the project, lessons learned, and future steps",
            "year": 2019,
            "img": "flower.jpg",
            "github": "www.github.com",
            "demo": "www.rbompiani.com",
            "major_skill": "javascript",
            "skills": ["javascript","react","threed"]
        },
        {
            "id": 2,
            "title": "Project 2",
            "short_desc": "This is a short description of how the project functions",
            "long_desc": "This is a much longer description of the project, lessons learned, and future steps",
            "year": 2019,
            "img": "flower.jpg",
            "github": "www.github.com",
            "demo": "www.rbompiani.com",
            "major_skill": "react",
            "skills": ["react","node","mysql"]
        },        
        {
            "id": 3,
            "title": "Project 3",
            "short_desc": "what's the big deal",
            "long_desc": "This is a much longer description of the project, lessons learned, and future steps",
            "year": 2019,
            "img" : "rabbit.jpg",
            "github": "www.github.com",
            "demo": "www.rbompiani.com",
            "major_skill": "node",
            "skills": ["node","javascript"]
        },
        {
            "id": 2,
            "title": "Project 2",
            "short_desc": "This is a short description of how the project functions",
            "long_desc": "This is a much longer description of the project, lessons learned, and future steps",
            "year": 2019,
            "img": "flower.jpg",
            "github": "www.github.com",
            "demo": "www.rbompiani.com",
            "major_skill": "react",
            "skills": ["react","node","mysql"]
        },   
        {
            "id": 2,
            "title": "Project 2",
            "short_desc": "This is a short description of how the project functions",
            "long_desc": "This is a much longer description of the project, lessons learned, and future steps",
            "year": 2019,
            "img": "flower.jpg",
            "github": "www.github.com",
            "demo": "www.rbompiani.com",
            "major_skill": "react",
            "skills": ["react","node","mysql"]
        }  
    ]

}
class Main extends React.Component{
    state = projectData;
    
    render(){
        return(
            <main>
                {this.state.projects.map((p, pnum) =>{
                    return (<ProjectCard major_skill={p.major_skill} img={p.img} title={p.title} short_desc={p.short_desc} skills={p.skills} key={pnum} />)
                })}    
            </main>
            
        )                
    }
    
}

export default Main;