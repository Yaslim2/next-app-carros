import type { NextPage } from "next";
import { carsJson } from "@assets/index";

const Home: NextPage = () => {
  return <div>{carsJson.map((car) => car.id)}</div>;
};

export default Home;
