import React from "react";
import "./SkillBubble.css";

const SkillBubble = (props) => {
    const { skill } = props;
    let initial;

    if (skill === "threed") {
        initial = "3";
    } else {
        initial = skill.charAt(0);
    }

    return (
        <div className={`skill ${skill}`}>{initial}</div>
    )
}

export default SkillBubble;
