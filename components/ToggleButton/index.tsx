import {
  ToggleButtonArea,
  ToggleButtonClose,
  ToggleButtonMenu,
} from "./styles";
import { RootState } from "@store/types";
import { useSelector } from "react-redux";

import { ToggleButtonProps } from "./types";
const ToggleButton: React.FC<ToggleButtonProps> = (props) => {
  const isToggle = useSelector((state: RootState) => state.ui.isToggle);
  return (
    <ToggleButtonArea isToggle={isToggle} onClick={props.onToggle}>
      {isToggle ? <ToggleButtonClose /> : <ToggleButtonMenu />}
    </ToggleButtonArea>
  );
};

export default ToggleButton;
