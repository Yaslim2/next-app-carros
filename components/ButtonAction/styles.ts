import styled from "styled-components";
import { ButtonActionStyleProps } from "./types";

export const ActionButton = styled.button<ButtonActionStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 5px 20px #0000001a;
  width: 177px;
  height: 45px;
  color: ${(props) => (props.outline ? "#313136" : "#fff")};
  background-color: ${(props) => (props.outline ? "transparent" : "#313136")};
  border: ${(props) => (props.outline ? "1px solid #313136" : "none")};
  border-radius: 25px;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
  &:hover {
    opacity: 0.7;
  }
`;

export const TextButton = styled.p<ButtonActionStyleProps>`
  font-size: 15px;
  margin-left: ${(props) => (props.outline ? "5px" : "0px")};
  margin-right: ${(props) => (!props.outline ? "10px" : "0px")}; ;
`;

export const Icon = styled.img`
  width: 24px;
  height: 20px;
`;
