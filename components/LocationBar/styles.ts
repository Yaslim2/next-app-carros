import { IsToggleProps } from "@shared/constants";
import {
  bgLocationBar,
  defaultBlue,
  locationBarGray,
  secondaryBlack,
} from "@shared/themes";
import { IoCalendar } from "@react-icons/all-files/io5/IoCalendar";
import { IoSearchOutline } from "@react-icons/all-files/io5/IoSearchOutline";
import { MdPlace } from "@react-icons/all-files/md/MdPlace";
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

export const CalendarIcon = styled(IoCalendar)`
  color: ${locationBarGray};
  height: 20px;
  width: 20px;
`;

export const MapPinIcon = styled(MdPlace)`
  color: ${locationBarGray};
  height: 20px;
  width: 20px;
`;

export const SearchIcon = styled(IoSearchOutline)`
  color: ${defaultBlue};
  height: 20px;
  width: 20px;
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
