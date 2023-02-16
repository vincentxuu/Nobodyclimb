import React, { useState } from "react";
import styled from "@emotion/styled";
import Navigation from "../shared/Navigation";
import Content from "../components/Content";
import Footer from "../shared/Footer";

const HomeWapper = styled.div`
  background: #f5f5f5;
  @media (max-width: 767px) {
    width: 100%;
    img{
      max-width: 100%;
      height:auto;
    }
  }
`;

const Home = () => {
  return (
    <HomeWapper>
      <Navigation />
      <Content />
      <Footer />
    </HomeWapper>
  );
};
export default Home;
