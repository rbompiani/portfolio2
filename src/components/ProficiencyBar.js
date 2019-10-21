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

    let skillName;

    if(skill==="threeD"){
        skillName = "3D";
    } else {
        skillName = skill;
    }
    
    return (
        <div>
                <h3 className="proficiency">{skillName}</h3>
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