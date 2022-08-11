import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const Skill = () => {
  const [skills, setSkills] = useState([]);

  const [hoverOnSkill, setHoverOnSkill] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.classList.contains("input-skill")) {
        removeFocus();
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [skills]);

  const removeFocus = () => {
    setSkills((current) =>
      current.map((skill) => {
        return { ...skill, show: false };
      })
    );
  };

  const handleClick = () => {
    if (skills.length >= 6) {
      alert("Skills should not exceed in 6.");
      return;
    }
    setSkills([
      ...skills,
      { value: "Type your skill", key: nanoid(), show: false },
    ]);
  };

  const showInput = (key) => {
    removeFocus();
    setSkills((current) =>
      current.map((skill) => {
        if (skill.key === key) return { ...skill, show: true };
        else {
          return skill;
        }
      })
    );
  };

  const handleChange = (e, key) => {
    setSkills((current) =>
      current.map((skill) => {
        if (skill.key === key) return { ...skill, value: e.target.value };
        else {
          return skill;
        }
      })
    );
  };

  return (
    <div className="skill-ctn">
      <div
        className="skill-header"
        onMouseOver={() => setHoverOnSkill(true)}
        onMouseOut={() => {
          setHoverOnSkill(false);
        }}
      >
        <h1 className="legend">Skills</h1>
        {hoverOnSkill && (
          <button className="add-skill" onClick={handleClick}>
            +
          </button>
        )}
      </div>
      <div className="skill-list">
        {skills.length > 0 &&
          skills.map((skill) =>
            skill.show ? (
              <input
                key={skill.key}
                type="text"
                value={skill.value}
                className="input-skill"
                onChange={(e) => handleChange(e, skill.key)}
              ></input>
            ) : (
              <li
                key={skill.key}
                className="input-skill skill"
                onClick={() => showInput(skill.key)}
              >
                {skill.value}
              </li>
            )
          )}
      </div>
    </div>
  );
};

export default Skill;
