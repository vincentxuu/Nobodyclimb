import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Navigation from "../shared/components/Navigation";
import Content from "../components/Content";
import Footer from "../shared/components/Footer";

const theme = {
  light: {
    backgroundColor: "#ededed",
    foregroundColor: "#f9f9f9",
    boxShadow: "0 1px 3px 0 #999999",
    titleColor: "#212121",
    temperatureColor: "#757575",
    textColor: "#828282",
  },
  dark: {
    backgroundColor: "#1F2022",
    foregroundColor: "#121416",
    boxShadow:
      "0 1px 4px 0 rgba(12, 12, 13, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.15)",
    titleColor: "#f9f9fa",
    temperatureColor: "#dddddd",
    textColor: "#cccccc",
  },
};

const HomeWapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  @media (max-width: 767px) {
    width: 100%;
    img {
      max-width: 100%;
      height: auto;
    }
  }
`;

const Home = () => {
  return (
    <HomeWapper theme={theme.light}>
      <Navigation />
      <Content />
      <Footer />
    </HomeWapper>
  );
};
export default Home;
