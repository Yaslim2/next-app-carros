import { IsToggleProps } from "@shared/constants";
import { bgLocationBar, secondaryBlack } from "@shared/themes";
import styled from "styled-components";

export const Bar = styled.div<IsToggleProps>`
  background-color: ${bgLocationBar};
  display: flex;
  gap: 30px;
  padding: 10px;
  align-items: center;
  border-radius: 25px;
  @media (max-width: 770px) {
    flex-direction: column;
  }
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;

export const Text = styled.p`
  color: ${secondaryBlack};
  font-size: 12px;
`;

export const Icon = styled.img`
  height: 18px;
  width: 18px;
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 7px;
  border-radius: 50%;
  background-color: #fff;
`;
