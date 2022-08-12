import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";

const Education = () => {
  const [onHover, setHover] = useState(false);
  const [education, setEducation] = useState([]);

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
  }, [education]);

  const handleClick = () => {
    if (education.length >= 3) return;
    setEducation([
      ...education,
      {
        date: { value: "June 2020 - April 2022", show: false },
        course: {
          value: "Bachelor of Science in Computer Science",
          show: false,
        },
        school: { value: "Harvard University", show: false },
        address: { value: "California, USA", show: false },
        key: nanoid(),
      },
    ]);
  };

  const removeFocus = () => {
    setEducation((current) =>
      current.map((educ) => {
        return {
          ...educ,
          date: { ...educ.date, show: false },
          course: { ...educ.course, show: false },
          school: { ...educ.school, show: false },
          address: { ...educ.address, show: false },
        };
      })
    );
  };

  const showInput = (name, key) => {
    removeFocus();
    setEducation((current) =>
      current.map((educ) => {
        if (educ.key === key) {
          if (name === "date") {
            return { ...educ, date: { ...educ.date, show: true } };
          }
          if (name === "course") {
            return { ...educ, course: { ...educ.course, show: true } };
          }
          if (name === "school") {
            return { ...educ, school: { ...educ.school, show: true } };
          }
          if (name === "address") {
            return { ...educ, address: { ...educ.address, show: true } };
          }
        } else {
          return educ;
        }
      })
    );
  };

  const handleChange = (e, name, key) => {
    setEducation((current) =>
      current.map((educ) => {
        if (educ.key === key) {
          if (name === "date") {
            return { ...educ, date: { ...educ.date, value: e.target.value } };
          }
          if (name === "course") {
            return {
              ...educ,
              course: { ...educ.course, value: e.target.value },
            };
          }
          if (name === "school") {
            return {
              ...educ,
              school: { ...educ.school, value: e.target.value },
            };
          }
          if (name === "course") {
            return {
              ...educ,
              address: { ...educ.address, value: e.target.value },
            };
          }
        } else {
          return educ;
        }
      })
    );
  };

  return (
    <div className="education-ctn">
      <div
        className="educ-header"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <h1 className="right-legend">Education</h1>
        {onHover && (
          <button className="header-btn" onClick={handleClick}>
            Add Education{" "}
          </button>
        )}
      </div>
      <div className="educ-list">
        {education.length > 0 &&
          education.map((educ) => (
            <div className="educ" key={educ.key}>
              <div className="educ-left">
                {educ.date.show ? (
                  <input
                    type="text"
                    value={educ.date.value}
                    className="input date-input"
                    onChange={(e) => handleChange(e, "date", educ.key)}
                  ></input>
                ) : (
                  <p
                    className="date input"
                    onClick={() => showInput("date", educ.key)}
                  >
                    {educ.date.value}
                  </p>
                )}
                {educ.course.show ? (
                  <input
                    type="text"
                    value={educ.course.value}
                    className="input course-input"
                    onChange={(e) => handleChange(e, "course", educ.key)}
                  ></input>
                ) : (
                  <p
                    className="course input"
                    onClick={() => showInput("course", educ.key)}
                  >
                    {educ.course.value}
                  </p>
                )}
              </div>
              <div className="educ-right">
                {educ.school.show ? (
                  <input
                    type="text"
                    value={educ.school.value}
                    className="input school-input"
                    onChange={(e) => handleChange(e, "school", educ.key)}
                  ></input>
                ) : (
                  <p
                    className="school input"
                    onClick={() => showInput("school", educ.key)}
                  >
                    {educ.school.value}
                  </p>
                )}
                {educ.address.show ? (
                  <input
                    type="text"
                    value={educ.address.value}
                    className="input address-input"
                    onChange={(e) => handleChange(e, "address", educ.key)}
                  ></input>
                ) : (
                  <p
                    className="address input"
                    onClick={() => showInput("address", educ.key)}
                  >
                    {educ.address.value}
                  </p>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Education;
