import NavBar from "@components/NavBar";
import React from "react";
import { MainPage } from "./styles";

const Layout: React.FC = (props) => {
  return (
    <>
      <NavBar />
      <MainPage>{props.children}</MainPage>
    </>
  );
};

export default Layout;
