import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer";
import Header from "../components/Shared/Header";

const Main = () => {
  return (
    <>
      <Header></Header>
      <hr className="mx-auto" style={{ width: "90%" }} />
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
