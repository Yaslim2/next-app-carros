import styled from "styled-components";
export const CarDetailArea = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  @media (max-width: 860px) {
    justify-content: center;
  }
`;

export const TextArea = styled.div``;

export const BrandIcon = styled.img`
  height: 120px;
  width: 91px;
  object-fit: contain;
  @media (max-width: 860px) {
    height: 100px;
    width: 70px;
  }
`;

export const BrandModelText = styled.h1`
  font-size: 35px;
  @media (max-width: 860px) {
    font-size: 30px;
  }
`;

export const PriceText = styled.h3`
  font-size: 25px;
  font-weight: 300;
  @media (max-width: 860px) {
    font-size: 20px;
  }
`;
