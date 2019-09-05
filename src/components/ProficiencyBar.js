import React from "react";
import "./Proficiencies.css";
import "./ProficiencyBar.css";

const ProficiencyBar = (props)=>{
    const { skill, proficiency, checked } = props;
    let bars = [];
    
    for (var i=0; i<10; i++){
        if(i<proficiency){
            bars.push("full");
        }else{
            bars.push("empty");
        }
    }
    
    return (
        <div>
                <h3 className="proficiency">{skill}</h3>
                <div className="proficiencyMeter">
                    {bars.map(b =>{
                        if(b==="full"){
                            return(
                                <span className={`bar ${b} ${skill.toLowerCase()}`} />       
                            )
                        } else {
                            return(
                                <span className={`bar ${b}`} />    
                            )
                        }
                })}                                    
                </div>          
        </div>

    )
}

export default ProficiencyBar;