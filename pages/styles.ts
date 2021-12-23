import styled from "styled-components";
import { IsToggleProps } from "@shared/constants";

export const Page = styled.div<IsToggleProps>`
  width: 100%;
  @media (max-width: 770px) {
    display: ${(props) => (props.isToggle ? "none" : "block")};
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  flex-wrap: wrap;
  gap: 20px;
`;
