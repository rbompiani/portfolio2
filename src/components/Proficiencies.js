import React from "react";
import ProficiencyBar from "./ProficiencyBar";


var skills = {
    proficiencies:[
    {
        skill:"JavaScript",
        proficiency: 8,
        checked: "checked"
    },
    {
      skill: "MySQL",
      proficiency: 6,
      checked: "checked"
    },
    {
        skill: "Node",
        proficiency: 5,
        checked: "checked"
    },
    {
        skill: "React",
        proficiency: 4,
        checked: "checked"
    },
    {
        skill:"threeD",
        proficiency: 9,
        checked: "checked"
    }
]
};

/* group of all proficiencies */
class Proficiencies extends React.Component{
    state = skills;
    render(){
        return(
            <div>
                <h2>Skills</h2>
                <div>
                {this.state.proficiencies.map((prof,profNum) =>{
                    return(
                        <ProficiencyBar skill={prof.skill} proficiency={prof.proficiency} key={profNum} />
                    )
                })}
                </div>
            </div>
        )
    }
}

export default Proficiencies;