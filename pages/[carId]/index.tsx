import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@store/types";
import type { GetStaticPaths, NextPage } from "next";
import { carsJson } from "@assets/index";
import { GetStaticProps } from "next";
import { CarDetailProps } from "./types";
import { Page, Container } from "./styles";
import { DetailCarArea, CarArea, CarCarousel } from "@components/index";
import Head from "next/head";

const CarDetail: NextPage<CarDetailProps> = (props) => {
  const isToggle = useSelector((state: RootState) => state.ui.isToggle);
  const [selectedSlide, setSelectedSlide] = useState<number>(0);

  const handleChangeSlide = (index: number) => {
    setSelectedSlide(index);
  };

  return (
    <Page isToggle={isToggle}>
      <Head>
        <title>
          {props.car.brand} {props.car.model}
        </title>
        <meta
          name="description"
          content={`Rent the ${props.car.brand} ${props.car.model} for just $${props.car.rent} per day!`}
        />
      </Head>
      <Container>
        <DetailCarArea
          brand={props.car.brand}
          iconImg={props.car.iconImg}
          model={props.car.model}
          rent={props.car.rent}
        />
        <CarArea
          img={props.car.types[selectedSlide].pathImg}
          color={props.car.types[selectedSlide].color}
          index={selectedSlide}
        />
        <CarCarousel
          onChangeSlide={handleChangeSlide}
          selectedSlide={selectedSlide}
          types={props.car.types}
        />
      </Container>
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const cars = carsJson.map((car) => {
    return {
      params: {
        carId: car.id,
      },
    };
  });

  return {
    paths: cars,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { carId } = ctx.params!;
  const selectedCar = carsJson.find((car) => car.id === carId);

  if (!selectedCar) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      car: selectedCar,
    },
  };
};

export default CarDetail;
