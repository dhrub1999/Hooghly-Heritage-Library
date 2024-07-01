import { ChevronArrowRight } from "./ChevronArrowRight";
import { LeftArrow } from "./LeftArrow";
import { RightArrow } from "./RightArrow";

const Icon = (props) => {
  switch (props.name.toLowerCase()) {
    case "rightarrow":
      return <RightArrow {...props} />;
    case "leftarrow":
      return <LeftArrow {...props} />;
    case "chevronRight":
      return <ChevronArrowRight {...props} />;
    default:
      return null;
  }
};

export default Icon;
