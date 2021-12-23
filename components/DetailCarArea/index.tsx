import {
  BrandIcon,
  BrandModelText,
  CarDetailArea,
  PriceText,
  TextArea,
} from "./styles";

import { DetailCarAreaProps } from "./types";

const DetailCarArea: React.FC<DetailCarAreaProps> = (props) => {
  return (
    <CarDetailArea>
      <BrandIcon src={props.iconImg} />
      <TextArea>
        <BrandModelText>
          {props.brand} {props.model}
        </BrandModelText>
        <PriceText>${props.rent}/day</PriceText>
      </TextArea>
    </CarDetailArea>
  );
};

export default DetailCarArea;
