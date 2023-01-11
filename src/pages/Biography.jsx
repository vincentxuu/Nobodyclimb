import React, { useState } from "react";
import styled from "@emotion/styled";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import Search from "../components/Search";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import CoverPhoto from "../images/photo/cover-photo.jpeg";
import PersonLeft from "../images/photo/personleft.jpeg";
import PersonMid from "../images/photo/personmid.jpeg";
import PersonRight from "../images/photo/personright.jpeg";
import { ReactComponent as ArrowRightCircle } from "../images/icon/arrow-right-circled.svg";
import { StyleOutlined } from "@mui/icons-material";
import { HashRouter, Route, Link } from "react-router-dom";
import { Box } from "@mui/system";
import TestBio from "../components/TestBio";

const PersonWrapper = styled.div`
  background: #f5f5f5;

`;
const SearchWrapper = styled.div`
  padding: 40px 0px 30px 160px;
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
const PersonCardWrapper = styled.div`
  display: flex;
`;

const PersonCardLeft = styled.div``;
const PersonCardMid = styled.div`
  padding-right: 20px;
  padding-left: 20px;
`;
const PersonCardRight = styled.div``;

const CardContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CardContentZone = styled.div``;
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

function Person() {
  //const [currentPerson,setCruuentPerson]= useState({
    //name:{
  //});//
  return (
    <PersonWrapper>
      <Header />
      <Cover>
        <h1>人物誌</h1>
        <p>記載了 Nobody 們的攀岩小故事</p>
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
          <PersonCardWrapper>
            <PersonCardLeft>
              <Link to="/biography/content" style={{ textDecoration: "none" }}>
                <Card sx={{ maxWidth: 360 }}>
                  <CardMedia
                    sx={{ height: 248 }}
                    image={PersonLeft}
                    title="green iguana"
                  />
                  <CardContent>
                    <CardContentWrapper>
                      <CardContentZone>
                        <Typography gutterBottom variant="h5" component="div">
                          謝璿
                        </Typography>
                        <Typography variant="subtitle1" color="#8E8C8C">
                          攀岩年資 | 3年
                        </Typography>
                      </CardContentZone>
                      <ArrowRightCircle />
                    </CardContentWrapper>
                    <Typography variant="body2" color="#1B1A1A">
                      攀岩像是在牆上跳舞，像是在牆上即興演出，像是在走一條迷宮，起點終點很明確，過程自由發揮，你就是答案。
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </PersonCardLeft>
            <PersonCardMid>
              <Card sx={{ maxWidth: 360 }}>
                <CardMedia
                  sx={{ height: 248 }}
                  image={PersonMid}
                  title="green iguana"
                />
                <CardContent>
                  <CardContentWrapper>
                    <CardContentZone>
                      <Typography gutterBottom variant="h5" component="div">
                        奇瑋
                      </Typography>
                      <Typography variant="subtitle1" color="#8E8C8C">
                        攀岩年資 | 3年
                      </Typography>
                    </CardContentZone>
                    <ArrowRightCircle />
                  </CardContentWrapper>
                  <Typography variant="body2" color="#1B1A1A">
                    攀岩像是在牆上跳舞，像是在牆上即興演出，像是在走一條迷宮，起點終點很明確，過程自由發揮，你就是答案。
                  </Typography>
                </CardContent>
              </Card>
            </PersonCardMid>
            <PersonCardRight>
              <Card sx={{ maxWidth: 360 }}>
                <CardMedia
                  sx={{ height: 248 }}
                  image={PersonRight}
                  title="green iguana"
                />
                <CardContent>
                  <CardContentWrapper>
                    <CardContentZone>
                      <Typography gutterBottom variant="h5" component="div">
                        小若
                      </Typography>
                      <Typography variant="subtitle1" color="#8E8C8C">
                        攀岩年資 | 3年
                      </Typography>
                    </CardContentZone>
                    <ArrowRightCircle />
                  </CardContentWrapper>
                  <Typography variant="body2" color="#1B1A1A">
                    攀岩像是在牆上跳舞，像是在牆上即興演出，像是在走一條迷宮，起點終點很明確，過程自由發揮，你就是答案。
                  </Typography>
                </CardContent>
              </Card>
            </PersonCardRight>
          </PersonCardWrapper>
        </Box>
      </Box>
      <StyleButton>
        <Button variant="outlined" size="large">
          看更多
        </Button>
      </StyleButton>
      <Footer />
    </PersonWrapper>
  );
}
export default Person;
