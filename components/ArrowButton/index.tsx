import { ArrowButtonProps } from "./types";
import { ArrowButtonArea, ArrowImg } from "./styles";
import { arrowBack, arrowForward } from "@assets/index";

const ArrowButton: React.FC<ArrowButtonProps> = (props) => {
  return (
    <ArrowButtonArea {...props}>
      <ArrowImg src={props.forward ? arrowForward : arrowBack} />
    </ArrowButtonArea>
  );
};

export default ArrowButton;
