import BackToTopButton from "@components/BackToTopButton";
import NavBar from "@components/NavBar";
import React from "react";
import { MainPage } from "./styles";

const Layout: React.FC = (props) => {
  return (
    <>
      <NavBar />
      <MainPage>{props.children}</MainPage>
      <BackToTopButton />
    </>
  );
};

export default Layout;
