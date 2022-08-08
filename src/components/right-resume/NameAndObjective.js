import React, { useState, useEffect } from "react";

const NameAndObjective = () => {
  const [fullname, setFullname] = useState("");
  const [position, setPosition] = useState("");
  const [objective, setObjective] = useState("");

  useEffect(() => {}, [fullname, position, objective]);

  return (
    <div className="name-objective">
      <div className="name">
        <h1>Jessie Apac</h1>
        <p className="position">Software Engineer</p>
      </div>
      <p className="objective">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        nisl augue, hendrerit a consequat ac, sagittis vel ligula. Cras felis
        nisi, pulvinar eu accumsan id, ornare hendrerit enim. Suspendisse leo
        lectus, sollicitudin sit amet tortor at, auctor rutrum sapien.
      </p>
    </div>
  );
};

export default NameAndObjective;
