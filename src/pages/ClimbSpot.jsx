import React, { useState } from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Navigation from "../shared/components/Navigation";
import Footer from "../shared/components/Footer";
import Search from "../components/Search";
import CoverPhoto from "../images/photo/climbspot-photo.jpeg";
import ClimbSpotList from "../components/ClimbSpotList";

const ClimbSpotWrapper = styled.div`
  background: #f5f5f5;
`;
const Cover = styled.div`
  background-image: url(${CoverPhoto});
  background-color: rgba(0, 0, 0, 0.3);
  background-blend-mode: multiply;
  background-size: cover;
  height: 520px;
  color: #ffff;
  position: relative;
  h1 {
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 150%;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 70%;
    left: 8%;
  }
  p {
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 82%;
    left: 8%;
  }
`;
const StyleButton = styled.div`
  text-align: center;
  button {
    margin-top: 40px;
    margin-bottom: 64px;
    border: 1px solid #1b1a1a;
    color: #1b1a1a;
    &:hover {
      background-color: #dbd8d8;
      color: #1b1a1a;
      border: #1b1a1a;
      border: 1px solid #1b1a1a;
    }
  }
`;

function ClimbSpot() {
  return (
    <ClimbSpotWrapper>
      <Navigation />
      <Cover>
        <Typography variant="h1">岩場介紹</Typography>
        <Typography variant="body1">探索台灣各式各樣有趣的岩場</Typography>
      </Cover>
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
          <Box
            sx={{
              mt: "40px",
              mb: "30px",
            }}
          >
            <Search />
          </Box>
          <ClimbSpotList />
        </Box>
      </Box>
      <StyleButton>
        <Button variant="outlined" size="large">
          看更多
        </Button>
      </StyleButton>
      <Footer />
    </ClimbSpotWrapper>
  );
}
export default ClimbSpot;
