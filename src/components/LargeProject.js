import React from "react";
import "./LargeProject.css";
import Slide from "./Slide";
import projectData from "../projectData";


class LargeProject extends React.Component {
    state = {
        slideIndex: 0
    };


    componentWillMount() {
        const selectedProj = projectData.projects.find(proj => { return proj.id == this.props.match.params.id });
        this.setState(selectedProj);
    };

    setSlide = (n) => {
        this.setState({ slideIndex: n });
    }

    render() {
        return (
            <div>
                <div className="slideshow-container">
                    {this.state.img.map((img, index) => {
                        return (<Slide img={img} skill={this.state.major_skill} noSlides={this.state.img.length} display={index === this.state.slideIndex ? "block" : "none"} />);
                    })}
                </div>
                <div style={{ textAlign: "center" }}>
                    {this.state.img.map((img, index) => {
                        return (<span class={`dot ${index === this.state.slideIndex ? "active" : ""}`} onClick={() => this.setSlide(index)}></span>);
                    })}
                </div>
            </div>


        )
    }

}

export default LargeProject;