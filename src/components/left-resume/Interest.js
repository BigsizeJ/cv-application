import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";

const Interest = () => {
  const [onHover, setHover] = useState(false);
  const [interest, setInterest] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.classList.contains("input-interest")) {
        removeFocus();
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [interest]);

  const removeFocus = () => {
    setInterest((current) =>
      current.map((inter) => {
        return { ...inter, show: false };
      })
    );
  };

  const handleClick = () => {
    if (interest.length >= 4) return;
    setInterest([
      ...interest,
      { value: "Type interest", key: nanoid(), show: false },
    ]);
  };

  const showInput = (key) => {
    removeFocus();
    setInterest((current) =>
      current.map((inter) => {
        if (inter.key === key) return { ...inter, show: true };
        else {
          return inter;
        }
      })
    );
  };

  const handleChange = (e, key) => {
    setInterest((current) =>
      current.map((inter) => {
        if (inter.key === key) return { ...inter, value: e.target.value };
        else {
          return inter;
        }
      })
    );
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
      <div className="interest-header">
        <h1 className="legend">Interest</h1>
        {onHover && (
          <button className="add-interest" onClick={handleClick}>
            +
          </button>
        )}
      </div>
      <div className="interest-list">
        {interest.length > 0 &&
          interest.map((inter) =>
            inter.show ? (
              <input
                type="text"
                key={inter.key}
                className="input-interest"
                value={inter.value}
                onChange={(e) => handleChange(e, inter.key)}
              ></input>
            ) : (
              <li
                key={inter.key}
                className="input-interest interest"
                onClick={() => showInput(inter.key)}
              >
                {inter.value}
              </li>
            )
          )}
      </div>
    </div>
  );
};

export default Interest;
