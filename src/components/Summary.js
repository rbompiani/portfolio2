import React from "react";
import projectData from"../projectData";



class Summary extends React.Component{

    componentDidMount(){
        console.log(this.props.match.params.id);
        const selectedProj = projectData.projects.find(proj => {return proj.id==this.props.match.params.id});
        console.log(selectedProj);
    }



    render(){
        return(
            <section>
                <h2>About</h2>
                <p>
                    This is my about text. Include my previous experience, and how it relates to programming. 
                    Also talk about my passions, intrests, and abilities.
                </p>
                <a>
                    Resume
                    <img src="#" />
                </a>
            </section>  
        )        
    }
}

export default Summary;