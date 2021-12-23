import styled from "styled-components";
import { IsToggleProps } from "@shared/constants";

export const Header = styled.header<IsToggleProps>`
  width: 100%;
  box-shadow: 0px 10px 30px #0000001a;
  @media (max-width: 770px) {
    height: ${(props) => (props.isToggle ? "100%" : null)};
    width: ${(props) => (props.isToggle ? "100vw" : null)};
  }
`;

export const Nav = styled.nav`
  padding: 15px;
`;

export const Ul = styled.ul<IsToggleProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 770px) {
    justify-content: ${(props) => (props.isToggle ? "space-between" : null)};
    flex-direction: ${(props) => (props.isToggle ? "column" : null)};
    height: ${(props) => (props.isToggle ? "100vh" : null)};
    align-items: center;
  }
`;

export const LogoArea = styled.div`
  cursor: pointer;
`;

export const LocationArea = styled.div<IsToggleProps>`
  cursor: pointer;
  @media (max-width: 770px) {
    display: ${(props) => (props.isToggle ? "block" : "none")};
  }
`;

export const ActionsArea = styled.div<IsToggleProps>`
  display: flex;
  gap: 10px;
  @media (max-width: 770px) {
    display: ${(props) => (props.isToggle ? "flex" : "none")};
  }
`;

export const Trash = styled.div<IsToggleProps>`
  display: none;
  @media (max-width: 770px) {
    display: ${(props) => (props.isToggle ? "none" : "block")};
  }
`;
