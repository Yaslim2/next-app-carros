import styled from "styled-components";
import { IoChevronUp } from "@react-icons/all-files/io5/IoChevronUp";
import { secondaryBlue } from "@shared/themes";
import { IsToggleProps } from "@shared/constants";

export const BackToTopArea = styled.div<IsToggleProps>`
  position: fixed;
  cursor: pointer;
  z-index: 2;
  bottom: 0;
  right: 0;
  margin: 20px;
  border-radius: 50%;
  display: ${(props) => (props.isToggle ? "none" : "flex")};
  align-items: center;
  padding: 9px;
  background-color: ${secondaryBlue};
`;

export const BackToTopIcon = styled(IoChevronUp)`
  height: 34px;
  width: 34px;
  color: #fff;
`;
