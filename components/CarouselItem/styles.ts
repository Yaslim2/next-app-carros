import styled from "styled-components";
import { CarouselItemStyleProps } from "./types";

export const ItemImage = styled.img<CarouselItemStyleProps>`
  cursor: pointer;
  width: ${(props) => (props.isSelected ? "500px" : "400px")};
  height: ${(props) => (props.isSelected ? "250px" : "150px")};
  cursor: pointer;
  object-fit: contain;
`;
