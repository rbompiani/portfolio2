import React from "react";

const SkillBubble = (props)=>{
    const { skill } = props;
    const initial = skill.charAt(0);
    return (
        <div className={`skill ${skill}`}>{initial}</div>
    )
}

export default SkillBubble;
