import type { GetStaticPaths, NextPage } from "next";
import { carsJson } from "@assets/index";
import { GetStaticProps } from "next";
import { CarDetailProps } from "./types";
import { Page, Container } from "./styles";
import DetailCarArea from "@components/DetailCarArea";
import CarArea from "@components/CarArea";
import Head from "next/head";

const CarDetail: NextPage<CarDetailProps> = (props) => {
  return (
    <Page>
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
          img={props.car.types[0].pathImg}
          color={props.car.types[0].color}
          index={0}
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
