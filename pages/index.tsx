import type { NextPage } from "next";
import { carsJson } from "@assets/index";
import { Page, Container } from "./styles";
import { CarItem } from "@components/index";
import Head from "next/head";
import { useSelector } from "react-redux";
import { RootState } from "@store/types";

const Home: NextPage = () => {
  const isToggle = useSelector((state: RootState) => state.ui.isToggle);

  return (
    <Page isToggle={isToggle}>
      <Head>
        <title>Exotic Cars</title>
        <meta
          name="description"
          content="Find the bests cars for you to rent on all over the world!"
        />
      </Head>
      <Container>
        {carsJson.map((car) => (
          <CarItem key={car.id} car={car} />
        ))}
      </Container>
    </Page>
  );
};

export default Home;
