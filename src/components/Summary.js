import React from "react";
import projectData from"../projectData";



class Summary extends React.Component{

    state={};

    componentDidMount(){
        console.log(this.props.match.params.id);
        const selectedProj = projectData.projects.find(proj => {return proj.id==this.props.match.params.id});
        this.setState(selectedProj);
        console.log(selectedProj);
    }



    render(){
        return(
            <section>
                <h2>{this.state.title}</h2>
                <p>{this.state.long_desc}</p>
                <h2>Project Links</h2>
                <img></img>
            </section>  
        )        
    }
}

export default Summary;