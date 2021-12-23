import { ButtonActionProps } from "./types";
import { ActionButton, TextButton, Icon } from "./styles";
import { arrowBackCatalog, arrowForward } from "@assets/index";

const ButtonAction: React.FC<ButtonActionProps> = (props) => {
  return (
    <ActionButton {...props}>
      {props.outline && <Icon src={arrowBackCatalog} alt="arrow to go back" />}
      <TextButton outline={props.outline}>{props.children}</TextButton>
      {!props.outline && <Icon src={arrowForward} alt="arrow to go forward" />}
    </ActionButton>
  );
};

export default ButtonAction;
