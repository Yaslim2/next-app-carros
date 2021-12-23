import styled from "styled-components";
import { defaultBlack, OpenSans } from "@shared/themes";
import { ButtonActionStyleProps } from "./types";

export const ActionButton = styled.button<ButtonActionStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 5px 20px #0000001a;
  width: 177px;
  height: 45px;
  color: ${(props) => (props.outline ? defaultBlack : "#fff")};
  background-color: ${(props) =>
    props.outline ? "transparent" : defaultBlack};
  border: ${(props) => (props.outline ? `1px solid ${defaultBlack}` : "none")};
  border-radius: 25px;
  font-weight: 600;
  font-family: ${OpenSans};
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 860px) {
    width: 160px;
    height: 40px;
  }
`;

export const TextButton = styled.p<ButtonActionStyleProps>`
  font-size: 15px;
  margin-left: ${(props) => (props.outline ? "5px" : "0px")};
  margin-right: ${(props) => (!props.outline ? "10px" : "0px")};
  @media (max-width: 860px) {
    font-size: 13px;
  }
`;

export const Icon = styled.img`
  width: 24px;
  height: 20px;
`;
