import React, { useState, useEffect } from "react";

const Skill = () => {
  const [skills, addSkill] = useState([]);
  const [addState, setAddState] = useState();

  const handleClick = () => {
    addSkill([...skills, ""]);
  };

  return (
    <div className="skill">
      <h1 className="legend">Skill</h1>
      <div className="skill-list">
        {skills.length > 0 && skills.map((skill) => <p>{skill.name}</p>)}
      </div>
      <button className="add" onClick={handleClick}>
        Add Skill
      </button>
    </div>
  );
};

export default Skill;
