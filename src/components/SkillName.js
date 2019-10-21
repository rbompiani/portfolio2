import React from "react";
import "./SkillName.css"



const SkillName = (props)=>{
    const { skill } = props;
    let skillTitle;

    if (skill==="threed"){
        skillTitle = "3D";
    } else {
        skillTitle = skill;
    }
    
    return (
        <div className={`skillName ${skill}`}>{skillTitle}</div>
    )
}

export default SkillName;