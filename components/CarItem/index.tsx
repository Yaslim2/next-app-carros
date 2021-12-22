import { CarItemProps } from "./types";
import {
  AreaCar,
  CarDetailArea,
  CarSubTitle,
  CarTitle,
  InfoArea,
  Icon,
  CarImg,
  PriceArea,
  DolarSignText,
  DownArea,
  RentText,
  PerDayText,
} from "./styles";
import { moreSvg } from "@assets/index";
import { useRouter } from "next/router";

const CarItem: React.FC<CarItemProps> = (props) => {
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(`/${id}`);
  };

  return (
    <AreaCar onClick={handleClick.bind(this, props.car.id)}>
      <InfoArea>
        <CarDetailArea>
          <CarTitle>{props.car.brand}</CarTitle>
          <CarSubTitle>{props.car.model.toUpperCase()}</CarSubTitle>
        </CarDetailArea>
        <Icon src={moreSvg} />
      </InfoArea>
      <CarImg src={props.car.pathImg} alt={props.car.brand} />
      <PriceArea>
        <DolarSignText>$</DolarSignText>
        <RentText>{props.car.rent}</RentText>
        <DownArea>
          <PerDayText>/day</PerDayText>
        </DownArea>
      </PriceArea>
    </AreaCar>
  );
};

export default CarItem;
