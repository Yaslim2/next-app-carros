import { ButtonActionProps } from "./types";
import {
  ActionButton,
  TextButton,
  ArrowForward,
  ArrowBackToCatalog,
} from "./styles";

const ButtonAction: React.FC<ButtonActionProps> = (props) => {
  return (
    <ActionButton {...props}>
      {props.outline && <ArrowBackToCatalog />}
      <TextButton outline={props.outline}>{props.children}</TextButton>
      {!props.outline && <ArrowForward />}
    </ActionButton>
  );
};

export default ButtonAction;
