import React from "react";
import styled from "@emotion/styled";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import PhotoAlbumList from "../components/PhotoAlbumList";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CenterFocusStrong } from "@mui/icons-material";

const PhotoWapper = styled.div`
  background: #f5f5f5;

  h1 {
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 150%;
    color: #1b1a1a;
    padding: 40px 0px 8px 0px;
    @media (max-width: 767px) {
      margin-left: 15px;
    }
  }
  p {
    font-family: "Noto Sans CJK TC";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #6d6c6c;
    padding-bottom: 24px;
    @media (max-width: 767px) {
      margin-left: 15px;
    }
    ul{
      column-count:unset;
    }
  }
`;

function Photo() {
  return (
    <PhotoWapper>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h1">攝影集</Typography>
          <Typography variant="body1">欣賞小人物們攀岩的英姿</Typography>
          <PhotoAlbumList />
        </Box>
      </Box>
      <Footer />
    </PhotoWapper>
  );
}
export default Photo;
