import React from "react";
import Summary from "./Summary";
import Proficiencies from "./Proficiencies";
//import "./components/Aside.css";

function Aside () {
    return(
        <aside>
            <header>
                <h1>Rebecca Bompiani</h1>
            </header>
            <Summary />
            <Proficiencies /> 
        </aside>  
    ) 
}

export default Aside;