import { CarouselItemProps } from "./types";
import { ItemImage } from "./styles";
const CarouselItem: React.FC<CarouselItemProps> = (props) => {
  return <ItemImage isSelected={props.isSelected} src={props.img} />;
};

export default CarouselItem;
