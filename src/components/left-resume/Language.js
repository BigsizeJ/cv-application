import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const Language = () => {
  const [languages, setLanguages] = useState([]);
  const [isHover, setHover] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.classList.contains("input-lang")) {
        removeFocus();
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [languages]);

  const removeFocus = () => [
    setLanguages((current) =>
      current.map((lang) => {
        return { ...lang, show: false };
      })
    ),
  ];

  const handleClick = () => {
    setLanguages([
      ...languages,
      { value: "Type your language", key: nanoid(), show: false },
    ]);
  };

  const showInput = (key) => {
    removeFocus();
    setLanguages((current) =>
      current.map((lang) => {
        if (lang.key === key) return { ...lang, show: true };
        else {
          return lang;
        }
      })
    );
  };

  const handleChange = (e, key) => {
    setLanguages((current) =>
      current.map((lang) => {
        if (lang.key === key) return { ...lang, value: e.target.value };
        else {
          return lang;
        }
      })
    );
  };

  return (
    <div
      className="lang-ctn"
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
    >
      <h1 className="legend">Language</h1>
      <div className="lang-list">
        {languages.length > 0 &&
          languages.map((lang) =>
            lang.show ? (
              <input
                type="text"
                className="input-lang"
                value={lang.value}
                key={lang.key}
                onChange={(e) => handleChange(e, lang.key)}
              ></input>
            ) : (
              <li
                className="input-lang lang"
                key={lang.key}
                onClick={() => {
                  showInput(lang.key);
                }}
              >
                {lang.value}
              </li>
            )
          )}
      </div>
      {isHover && (
        <button className="add" onClick={handleClick}>
          Add Language
        </button>
      )}
    </div>
  );
};

export default Language;
