import type { NextPage } from "next";
import { carsJson } from "@assets/index";
import { Page, Container } from "./styles";
import CarItem from "@components/CarItem";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>Exotic Cars</title>
        <meta
          name="description"
          content="Find the bests cars for you to rent on all over the world!"
        />
      </Head>
      <Container>
        {carsJson.map((car) => (
          <CarItem car={car} />
        ))}
      </Container>
    </Page>
  );
};

export default Home;
