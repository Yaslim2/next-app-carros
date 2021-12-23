import { TypesCar } from "@store/slices/carsSlice/types";

export type CarCarouselProps = {
  types: TypesCar[];
  selectedSlide: number;
  onChangeSlide: (index: number) => void;
};
