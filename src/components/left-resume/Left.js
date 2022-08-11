import Information from "./Information";
import Interest from "./Interest";
import Language from "./Language";
import Skill from "./Skill";

const Left = () => {
  return (
    <div className="left">
      <Information />
      <Skill />
      <Language />
      <Interest />
    </div>
  );
};

export default Left;
