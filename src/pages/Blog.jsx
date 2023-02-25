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
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "64px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            padding: "40px 0px 40px 0px",
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
