import { Carousel } from "react-responsive-carousel";
import { CarCarouselProps } from "./types";
import { CarouselArea } from "./styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ArrowButton from "@components/ArrowButton";
import CarouselItem from "@components/CarouselItem";

const CarCarousel: React.FC<CarCarouselProps> = (props) => {
  const handleChangeSlide = (index: number) => {
    props.onChangeSlide(index);
  };

  return (
    <CarouselArea>
      <Carousel
        selectedItem={props.selectedSlide}
        showArrows
        onChange={handleChangeSlide}
        showThumbs={false}
        onClickItem={handleChangeSlide}
        showIndicators={false}
        showStatus={false}
        centerMode
        renderArrowNext={(clickHandler) => {
          return <ArrowButton forward onClick={clickHandler} />;
        }}
        renderArrowPrev={(clickHandler) => {
          return <ArrowButton onClick={clickHandler} />;
        }}
        centerSlidePercentage={36}
        infiniteLoop
      >
        {props.types.map((type, index) => {
          return (
            <CarouselItem
              key={index}
              isSelected={index === props.selectedSlide}
              img={type.pathImg}
            />
          );
        })}
      </Carousel>
    </CarouselArea>
  );
};

export default CarCarousel;
