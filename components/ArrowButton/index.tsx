import { ArrowButtonProps } from "./types";
import { ArrowButtonArea, ArrowBack, ArrowForward } from "./styles";

const ArrowButton: React.FC<ArrowButtonProps> = (props) => {
  return (
    <ArrowButtonArea {...props}>
      {props.forward ? <ArrowForward /> : <ArrowBack />}
    </ArrowButtonArea>
  );
};

export default ArrowButton;
