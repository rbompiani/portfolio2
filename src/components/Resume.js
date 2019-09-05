import React from "react";
import "./Resume.css";

const Resume = ()=> {
    return (

        <div id="resumeContainer">
            <h2>RESUME</h2>

            <div class="resumeCategory">experience</div>
            <div class="resumeEntry">
                <div class="resumeEntryHeading">Minarik Architecture - Portland, OR</div>
                <div class="resumeEntryPosition">Associate</div>
                <p>Developed designs for a wide range of commercial, institutional, and residential clients.  
                    Responsible for modeling and visualizing designs for both iterative design and final presentations. 
                    Managed Consultants throughout the design and construction process.</p>
            </div>
            <div class="resumeDate">
                20013 - present
            </div>

            <div class="resumeEntry">
                <div class="resumeEntryHeading">Portland State University, School of Architecture - Portland, OR</div>
                <div class="resumeEntryPosition">Adjunct Professor</div>
                <p>Developed and taught emerging digital curriculum related to digital fabrication, 
                    parametric design, and storytelling via 3D modeling and visualization.</p>
            </div>
            <div class="resumeDate">
                2014 - 2017
            </div>

            <div class="resumeEntry">
                <div class="resumeEntryHeading">SRG Partnership - Portland, OR</div>
                <div class="resumeEntryPosition">Associate</div>
                <p>Assessed and master planned various University campuses.  Investigated digital information management, 
                    and developed custom interactive building mapping programs to help universities better understand their 
                    built environment.</p>
            </div>
            <div class="resumeDate">
                2014 - 2017
            </div>

            <div class="resumeEntry">
                <div class="resumeEntryHeading">Ankrom Moisan Associated Architects - Portland, OR</div>
                <div class="resumeEntryPosition">Designer</div>
                <p>Programmed and conceptualized early designs for large-scale commercial developments.  
                    Diagrammed and documented design concepts for client and consumer presentations.</p>
            </div>
            <div class="resumeDate">
                2014 - 2017
            </div>

            <div class="resumeCategory">education</div>
            <div class="resumeEntry">
                <div class="resumeEntryHeading">University of Oregon - Portland, OR</div>
                <div class="resumeEntryPosition">Full Stack Bootcamp</div>
                <p>A six month, intensive full stack curriculum focused around the MERN stack.</p>
            </div>
            <div class="resumeDate">
                2019
            </div>

            <div class="resumeEntry">
                <div class="resumeEntryHeading">Virginia Tech - Blacksburg, VA</div>
                <div class="resumeEntryPosition">Bachelor of Architecture</div>
                <p>A five year professional degree focused on complex problem solving and reasoning, design cohesion, and graphic representation</p>
            </div>
            <div class="resumeDate">
                2007
            </div>

            <div class="resumeCategory">knowledge</div>
            <div class="resumeSubgrid">
                <div>React</div>
                <div>Node</div>
                <div>Javascript</div>
                <div>Git</div>
                <div>HTML5</div>
                <div>CSS3</div>
                <div>jQuery</div>
                <div>Adobe Suite</div>
                <div>Unity3D</div>
                <div>Digital Fabrication</div>
                <div>3D Modeling</div>
            </div>

        </div>
    )
}

export default Resume;