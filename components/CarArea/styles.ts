import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const AreaButton = styled.div`
  display: flex;
  align-items: center;
`;

export const CarAreaImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CarImg = styled.img`
  width: 600px;
  height: 300px;
  object-fit: contain;
  margin-bottom: 10px;
`;

export const ColorArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IndexText = styled.h3`
  font-size: 35px;
`;

export const ColorText = styled.h4`
  font-size: 25px;
  font-weight: 300;
`;
