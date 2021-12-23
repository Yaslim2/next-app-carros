import { defaultBlue, OpenSans } from "@shared/themes";
import styled from "styled-components";
import { ButtonStyleProps } from "./types";

export const Button = styled.button<ButtonStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 94px;
  height: 36px;
  border-radius: 13px;
  font-family: ${OpenSans};
  border: ${(props) => (props.border ? `2px solid ${defaultBlue}` : "none")};
  background-color: transparent;
  font-size: 15px;
  font-weight: bold;
  color: ${defaultBlue};
`;
