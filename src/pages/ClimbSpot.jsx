import React, { useState } from "react";
import styled from "@emotion/styled";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import Search from "../components/Search";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CoverPhoto from "../images/photo/climbspot-photo.jpeg";
import ClimbSpotList from "../components/ClimbSpotList";
import { Box } from "@mui/system";
import ToggleButtonArea from "../components/ToogleButtonArea";
import ToggleButtonType from "../components/ToogleButtonType";
const ClimbSpotWrapper = styled.div`
  background: #f5f5f5;
`;
const Cover = styled.div`
  background-image: url(${CoverPhoto});
  background-color: rgba(0, 0, 0, 0.3);
  background-blend-mode: multiply;
  background-size: cover;
  color: #ffff;

  h1 {
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 150%;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 332px 0px 8px 160px;
  }
  p {
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding-top: 8px;
    padding-bottom: 72px;
    padding-left: 160px;
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
      <Header />
      <Cover>
        <h1>岩場介紹</h1>
        <p>探索台灣各式各樣有趣的岩場</p>
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flexWrap:"wrap",
                mt: "32px",
              }}
            >
              <ToggleButtonArea />
              <Box
                sx={{
                  mt: "32px",
                }}
              >
                <ToggleButtonType />
              </Box>
            </Box>
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
