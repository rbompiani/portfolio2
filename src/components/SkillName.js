import React from "react";
import "./SkillName.css"



const SkillName = (props)=>{
    const { skill } = props;
    
    return (
        <div className={`skillName ${skill}`}>{skill}</div>
    )
}

export default SkillName;