import React, { useState } from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Navigation from "../shared/components/Navigation";
import Footer from "../shared/components/Footer";
import Search from "../components/Search";
import CardBlogList from "../components/CardBlogList";

const BlogWapper = styled.div`
  background: #f5f5f5;
`;

function Blog() {
  return (
    <BlogWapper>
      <Navigation />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "3%",
          " @media (max-width: 767px)": {
            paddingTop: "15%",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "12%",
            right: "20%",
            " @media (max-width: 767px)": {
              top: "12%",
              right: "25%",
            },
          }}
        >
          <Search />
        </Box>
        <CardBlogList />
      </Box>
      <Footer />
    </BlogWapper>
  );
}
export default Blog;
