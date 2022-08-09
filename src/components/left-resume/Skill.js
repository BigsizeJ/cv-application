import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const Skill = () => {
  const [skills, addSkill] = useState([]);
  const [addState, setAddState] = useState();

  const handleClick = () => {
    addSkill((current) => [
      ...current,
      { value: "hehe", key: nanoid(), show: false },
    ]);
  };

  const showInput = (e, key) => {
    console.log(e.target);
    console.log(key);
  };

  return (
    <div className="skill-ctn">
      <h1 className="legend">Skills</h1>
      <div className="skill-list">
        {skills.length > 0 &&
          skills.map((skill) => (
            <li
              key={skill.key}
              className="skill"
              onClick={(e) => showInput(e, skill.key)}
            >
              {skill.value}
            </li>
          ))}
      </div>
      <button className="add" onClick={handleClick}>
        Add Skill
      </button>
    </div>
  );
};

export default Skill;
