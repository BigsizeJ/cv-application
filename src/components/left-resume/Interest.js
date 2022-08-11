import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";

const Interest = () => {
  const [onHover, setHover] = useState(false);
  const [interest, setInterest] = useState([]);
  const handleClick = () => {
    setInterest([
      ...interest,
      { value: "Type interest", key: nanoid(), show: false },
    ]);
  };

  return (
    <div
      className="interest-ctn"
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
    >
      <h1 className="legend">Interest</h1>
      <div className="interest-list">
        {interest.length > 0 &&
          interest.map((inter) =>
            inter.show ? (
              <input type="text" key={inter.key} value={inter.value}></input>
            ) : (
              <li className="interest">{inter.value}</li>
            )
          )}
      </div>
      {onHover && (
        <button className="add" onClick={handleClick}>
          Add Interest
        </button>
      )}
    </div>
  );
};

export default Interest;
