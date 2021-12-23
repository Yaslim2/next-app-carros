import { ToggleButtonArea, ToggleButtonIcon } from "./styles";
import { RootState } from "@store/types";
import { useSelector } from "react-redux";
import { menuSvg, closeSvg } from "@assets/index";

import { ToggleButtonProps } from "./types";
const ToggleButton: React.FC<ToggleButtonProps> = (props) => {
  const isToggle = useSelector((state: RootState) => state.ui.isToggle);
  const imgRender = isToggle ? closeSvg : menuSvg;
  return (
    <ToggleButtonArea isToggle={isToggle} onClick={props.onToggle}>
      <ToggleButtonIcon src={imgRender} />
    </ToggleButtonArea>
  );
};

export default ToggleButton;
