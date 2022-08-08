import React, { useState, useEffect } from "react";

const Skill = () => {
  const [skills, addSkill] = useState([]);
  const [addState, setAddState] = useState();

  const handleClick = () => {
    const list = {};
    console.log(skills);
    addSkill((current) => [...current, "hehe"]);
  };

  const typeSkill = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <div className="skill">
      <h1 className="legend">Skill</h1>
      <div className="skill-list">
        {skills.length > 0 &&
          skills.map((skill) => <li onClick={typeSkill}>{skill}</li>)}
      </div>
      <button className="add" onClick={handleClick}>
        Add Skill
      </button>
    </div>
  );
};

export default Skill;
