import React from "react";



const SkillName = (props)=>{
    const { skill } = props;
    
    return (
        <div className={`skillName ${skill}`}>{skill}</div>
    )
}

export default SkillName;