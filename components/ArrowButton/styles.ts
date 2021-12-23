import styled from "styled-components";
import { ArrowButtonStyleProps } from "./types";

export const ArrowButtonArea = styled.button<ArrowButtonStyleProps>`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: #000;
  position: absolute;
  z-index: 2;
  top: calc(40% - 15px);
  right: ${(props) => (props.forward ? "15px" : null)};
  cursor: pointer;
  @media (max-width: 860px) {
    width: 29px;
    height: 29px;
  }
`;

export const ArrowImg = styled.img`
  height: 24px;
  width: 24px;
  @media (max-width: 860px) {
    width: 15px;
    height: 15px;
  }
`;
