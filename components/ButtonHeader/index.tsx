import { ButtonHeaderProps } from "./types";
import { Button } from "./styles";

const ButtonHeader: React.FC<ButtonHeaderProps> = (props) => {
  return <Button {...props}>{props.children}</Button>;
};

export default ButtonHeader;
