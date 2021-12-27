import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 860px) {
    flex-direction: column;
    gap: 30px;
    margin-top: 40px;
  }
`;

export const AreaButton = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 860px) {
    justify-content: center;
  }
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

  @media (max-width: 860px) {
    width: 450px;
    height: 150px;
  }

  @media (max-width: 403px) {
    width: 350px;
    height: 125px;
  }

  @media (max-width: 350px) {
    width: 300px;
    height: 125px;
  }
`;

export const ColorArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 860px) {
    align-items: flex-start;
  }
`;

export const IndexText = styled.h3`
  font-size: 35px;
  @media (max-width: 860px) {
    font-size: 30px;
  }
`;

export const ColorText = styled.h4`
  font-size: 25px;
  font-weight: 300;
  @media (max-width: 860px) {
    font-size: 20px;
  }
`;
