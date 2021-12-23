import { IsToggleProps } from "@shared/constants";
import styled from "styled-components";

export const ToggleButtonArea = styled.div<IsToggleProps>`
  cursor: pointer;
  display: none;
  @media (max-width: 770px) {
    display: block;
    position: ${(props) => (props.isToggle ? "absolute" : null)};
    right: 0;
    margin-left: 5px;
  }
`;

export const ToggleButtonIcon = styled.img`
  height: 30px;
  width: 30px;
`;
