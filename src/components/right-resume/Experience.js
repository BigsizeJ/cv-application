import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";

const Experience = () => {
  const [onHover, setHover] = useState(false);
  const [experience, setExperience] = useState([]);

  const [show, setShow] = useState([]);

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
  }, [experience]);

  const removeFocus = () => {
    setExperience((current) =>
      current.map((exp) => {
        return {
          ...exp,
          position: { ...exp.position, show: false },
          date: { ...exp.date, show: false },
          company: { ...exp.company, show: false },
          address: { ...exp.address, show: false },
          detail: { ...exp.detail, show: false },
        };
      })
    );
  };

  const handleClick = () => {
    if (experience.length >= 3) return;
    setExperience([
      ...experience,
      {
        date: { value: "AUG 2021 - FEB 2022", show: false },
        position: { value: "Job Position", show: false },
        company: { value: "Google LLC", show: false },
        address: {
          value: "Mountain View, California, United States",
          show: false,
        },
        detail: {
          value:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisl augue, hendrerit a consequat ac, sagittis vel ligula.",
          show: false,
        },
        key: nanoid(),
      },
    ]);
  };

  const showInput = (name, key) => {
    removeFocus();
    setExperience((current) =>
      current.map((exp) => {
        if (exp.key === key) {
          if (name === "date") {
            return { ...exp, date: { ...exp.date, show: true } };
          }
          if (name === "position") {
            return { ...exp, position: { ...exp.position, show: true } };
          }
          if (name === "company") {
            return { ...exp, company: { ...exp.company, show: true } };
          }
          if (name === "address") {
            return { ...exp, address: { ...exp.address, show: true } };
          }
          if (name === "detail") {
            return { ...exp, detail: { ...exp.detail, show: true } };
          }
        } else {
          return exp;
        }
      })
    );
  };

  const handleChange = (e, name, key) => {
    setExperience((current) =>
      current.map((exp) => {
        if (exp.key === key) {
          if (name === "date") {
            return { ...exp, date: { ...exp.date, value: e.target.value } };
          }
          if (name === "position") {
            return {
              ...exp,
              position: { ...exp.position, value: e.target.value },
            };
          }
          if (name === "company") {
            return {
              ...exp,
              company: { ...exp.company, value: e.target.value },
            };
          }
          if (name === "address") {
            return {
              ...exp,
              address: { ...exp.address, value: e.target.value },
            };
          }
          if (name === "detail") {
            return {
              ...exp,
              detail: { ...exp.detail, value: e.target.value },
            };
          }
        } else {
          return exp;
        }
      })
    );
  };

  return (
    <div className="experience-ctn">
      <div
        className="exp-header"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <h1 className="right-legend">Work Experience</h1>
        {onHover && (
          <button className="header-btn" onClick={handleClick}>
            Add Experience
          </button>
        )}
      </div>
      <div className="exp-list">
        {experience.length > 0 &&
          experience.map((exp) => (
            <div className="exp" key={exp.key}>
              <div className="exp-left">
                {exp.date.show ? (
                  <input
                    type="text"
                    value={exp.date.value}
                    className="input date-input"
                    onChange={(e) => handleChange(e, "date", exp.key)}
                  ></input>
                ) : (
                  <p
                    className="date input"
                    onClick={() => showInput("date", exp.key)}
                  >
                    {exp.date.value}
                  </p>
                )}
                {exp.position.show ? (
                  <input
                    type="text"
                    value={exp.position.value}
                    className="input position-input"
                    onChange={(e) => handleChange(e, "position", exp.key)}
                  ></input>
                ) : (
                  <p
                    className="position input"
                    onClick={() => showInput("position", exp.key)}
                  >
                    {exp.position.value}
                  </p>
                )}
              </div>
              <div className="exp-right">
                {exp.company.show ? (
                  <input
                    type="text"
                    value={exp.company.value}
                    className="input company-input"
                    onChange={(e) => handleChange(e, "company", exp.key)}
                  ></input>
                ) : (
                  <p
                    className="company input"
                    onClick={() => showInput("company", exp.key)}
                  >
                    {exp.company.value}
                  </p>
                )}
                {exp.address.show ? (
                  <input
                    type="text"
                    value={exp.address.value}
                    className="input address-input"
                    onChange={(e) => handleChange(e, "address", exp.key)}
                  ></input>
                ) : (
                  <p
                    className="address input"
                    onClick={() => showInput("address", exp.key)}
                  >
                    {exp.address.value}
                  </p>
                )}
                {exp.detail.show ? (
                  <textarea
                    value={exp.detail.value}
                    className="input detail-input"
                    onChange={(e) => handleChange(e, "detail", exp.key)}
                    maxlength="150"
                  ></textarea>
                ) : (
                  <p
                    className="detail input"
                    onClick={() => showInput("detail", exp.key)}
                  >
                    {exp.detail.value}
                  </p>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Experience;
