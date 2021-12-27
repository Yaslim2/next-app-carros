import { IsToggleProps } from "@shared/constants";
import { FiMenu } from "@react-icons/all-files/fi/FiMenu";
import { FiX } from "@react-icons/all-files/fi/FiX";
import styled from "styled-components";
import { defaultBlack } from "@shared/themes";

export const ToggleButtonArea = styled.div<IsToggleProps>`
  cursor: pointer;
  display: none;
  @media (max-width: 770px) {
    display: block;
    position: ${(props) => (props.isToggle ? "absolute" : null)};
    top: 0;
    right: 0;
    margin: ${(props) => (props.isToggle ? "10px" : null)};
  }
`;

export const ToggleButtonMenu = styled(FiMenu)`
  height: 30px;
  width: 30px;
  color: ${defaultBlack};
`;

export const ToggleButtonClose = styled(FiX)`
  height: 30px;
  width: 30px;
  color: ${defaultBlack};
`;
