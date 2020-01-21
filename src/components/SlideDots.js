import React from "react";

const SlideDots = props => {
    return (
        <div style={{ textAlign: "center" }}>
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
        </div>
    )
}

export default SlideDots;