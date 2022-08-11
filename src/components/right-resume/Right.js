import Education from "./Education";
import Experience from "./Experience";
import NameAndObjective from "./NameAndObjective";

const Right = () => {
  return (
    <div className="right">
      <NameAndObjective />
      <Experience />
      <Education />
    </div>
  );
};

export default Right;
