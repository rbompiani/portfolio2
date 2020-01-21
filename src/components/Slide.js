import React from "react";

const Slide = (props) => {
    return (
        <div className="mySlides fade" style={{ display: props.display }}>
            <div className={`numbertext ${props.skill}`}>1 / {props.noSlides}</div>
            <img src={process.env.PUBLIC_URL + "/images/projects/" + props.img} style={{ width: 100 + "%" }} />
            <div className={`text ${props.skill}`}>Caption Text</div>
        </div>
    )
}

export default Slide;
