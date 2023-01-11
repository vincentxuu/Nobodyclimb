import React, { useState } from "react";
import styled from "@emotion/styled";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import Search from "../components/Search";
import CardBlogList from "../components/CardBlogList";
import ToggleButtonCategory from "../components/ToggleButtonCategory";
import Box from "@mui/material/Box";
import Carousel from "../components/Carousel";
import Text from "../components/Test";

const BlogWapper = styled.div`
  background: #f5f5f5;
`;

const StyleCarousel = styled(Carousel)`
  width: 1120px;
`;
function Blog() {
  return (
    <BlogWapper>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "64px",
        }}
      >
        <Text />
        <Box
          sx={{
            display: "flex",
            padding: "40px 0px 40px 0px",
          }}
        >
          <ToggleButtonCategory  />
          <Search  />
        </Box>
        <CardBlogList />
      </Box>
      <Footer />
    </BlogWapper>
  );
}
export default Blog;
