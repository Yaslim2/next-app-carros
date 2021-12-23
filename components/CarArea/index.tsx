import { CarAreaProps } from "./types";
import {
  Container,
  CarImg,
  CarAreaImg,
  AreaButton,
  ColorArea,
  IndexText,
  ColorText,
} from "./styles";
import ButtonAction from "@components/ButtonAction";
import { useRouter } from "next/router";

const CarArea: React.FC<CarAreaProps> = (props) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <Container>
      <AreaButton>
        <ButtonAction onClick={handleGoBack} outline>
          Back to catalog
        </ButtonAction>
      </AreaButton>
      <CarAreaImg>
        <CarImg src={props.img} alt="A car" />
        <ButtonAction>Book now</ButtonAction>
      </CarAreaImg>
      <ColorArea>
        <IndexText>0{props.index + 1}</IndexText>
        <ColorText>
          {props.color[0].toUpperCase() + props.color.slice(1)}
        </ColorText>
      </ColorArea>
    </Container>
  );
};

export default CarArea;
