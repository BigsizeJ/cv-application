import React, { useState, useEffect } from "react";

const Education = () => {
  const [onHover, setHover] = useState(false);

  return (
    <div className="education-ctn">
      <div
        className="educ-header"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <h1 className="right-legend">Education</h1>
        {onHover && <button className="header-btn">Add Education </button>}
      </div>
    </div>
  );
};

export default Education;
