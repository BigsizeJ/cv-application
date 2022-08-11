import React, { useState, useEffect } from "react";

const Experience = () => {
  const [onHover, setHover] = useState(false);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="experience-ctn">
      <div
        className="exp-header"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <h1 className="right-legend">Work Experience</h1>
        {onHover && <button className="header-btn">Add Experience</button>}
      </div>
    </div>
  );
};

export default Experience;
