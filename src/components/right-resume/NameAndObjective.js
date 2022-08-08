import React, { useState, useEffect } from "react";

const NameAndObjective = () => {
  const [fullname, setFullname] = useState({ value: "", show: false });
  const [position, setPosition] = useState({ value: "", show: false });
  const [objective, setObjective] = useState({ value: "", show: false });

  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.classList.contains("input")) {
        removeFocus();
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [fullname, position, objective]);

  const handleClick = (e) => {
    removeFocus();
    if (e.target.classList.contains("fullname")) {
      setFullname({ ...fullname, show: true });
    }
    if (e.target.classList.contains("position")) {
      setPosition({ ...position, show: true });
    }
  };

  const removeFocus = () => {
    setFullname({ ...fullname, show: false });
    setPosition({ ...position, show: false });
    setObjective({ ...objective, show: false });
  };

  return (
    <div className="name-objective">
      <div className="name">
        {fullname.show ? (
          <input
            type="text"
            className="fullname-input input"
            onChange={(e) => {
              setFullname({ ...fullname, value: e.target.value });
            }}
          ></input>
        ) : (
          <h1 className="input fullname" onClick={handleClick}>
            {fullname.value.length <= 0 ? "Fullname" : fullname.value}
          </h1>
        )}
        {position.show ? (
          <input
            type="text"
            className="position-input input"
            onChange={(e) => {
              setPosition({ ...position, value: e.target.value });
            }}
          ></input>
        ) : (
          <p className="input position" onClick={handleClick}>
            {position.value.length <= 0 ? "Job position" : position.value}
          </p>
        )}
      </div>
      <p className="input objective">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        nisl augue, hendrerit a consequat ac, sagittis vel ligula. Cras felis
        nisi, pulvinar eu accumsan id, ornare hendrerit enim. Suspendisse leo
        lectus, sollicitudin sit amet tortor at, auctor rutrum sapien.
      </p>
    </div>
  );
};

export default NameAndObjective;
