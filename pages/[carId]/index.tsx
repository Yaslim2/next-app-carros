import type { GetStaticPaths, NextPage } from "next";
import { carsJson } from "@assets/index";
import { GetStaticProps } from "next";
import { CarDetailProps } from "./types";

const CarDetail: NextPage<CarDetailProps> = (props) => {
  return <div>{props.car.id}</div>;
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
