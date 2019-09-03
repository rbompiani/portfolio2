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
        <div className="proficiencyLine">
            <h3>{skill}</h3>
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
            <label className="switch">
                <input type="checkbox" checked={checked}></input>
                <span className={`${skill.toLowerCase()} slider round` } ></span>
            </label>
        </div>
    )
}

export default ProficiencyBar;