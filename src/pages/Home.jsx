import React, { useState } from "react";
import styled from "@emotion/styled";
import Header from "../shared/Header";
import Content from "../components/Content";
import Footer from "../shared/Footer";

const HomeWapper = styled.div`
  background: #f5f5f5;
`;

const Home = () => {
  return (
    <HomeWapper>
      <Header />
      <Content />
      <Footer />
    </HomeWapper>
  );
};
export default Home;
