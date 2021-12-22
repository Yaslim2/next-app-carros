import styled from "styled-components";

export const AreaCar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8f8fa;
  padding: 15px;
  border-radius: 20px;
  cursor: pointer;
`;

export const InfoArea = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CarDetailArea = styled.div``;

export const CarTitle = styled.h2`
  font-size: 15px;
  font-weight: bold;
`;

export const CarSubTitle = styled.h3`
  font-size: 15px;
  font-weight: 300;
`;

export const Icon = styled.img`
  margin-top: -10px;
  height: 30px;
  width: 30px;
`;

export const CarImg = styled.img`
  width: 200px;
  height: 107px;
  object-fit: contain;
`;

export const PriceArea = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const DownArea = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const DolarSignText = styled.p`
  font-weight: bold;
  margin-top: 4px;
  font-size: 12px;
`;

export const RentText = styled.h3`
  font-size: 22px;
`;

export const PerDayText = styled.p`
  font-size: 13px;
`;
