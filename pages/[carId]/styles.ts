import { IsToggleProps } from "@shared/constants";
import { gradientColor } from "@shared/themes";
import styled from "styled-components";

export const Page = styled.div<IsToggleProps>`
  background-image: ${`linear-gradient(to bottom left, ${gradientColor}, #fff)`};
  height: 100%;
  width: 100%;
  @media (max-width: 770px) {
    display: ${(props) => (props.isToggle ? "none" : null)};
  }
`;

export const Container = styled.div`
  padding: 20px;
  height: 100%;
`;
