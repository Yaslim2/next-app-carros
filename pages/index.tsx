import type { NextPage } from "next";
import { carsJson } from "@assets/index";
import { Page, Container } from "./styles";
import CarItem from "@components/CarItem";

const Home: NextPage = () => {
  return (
    <Page>
      <Container>
        {carsJson.map((car) => (
          <CarItem car={car} />
        ))}
      </Container>
    </Page>
  );
};

export default Home;
