import React, { useState } from "react";
import styled from "@emotion/styled";
import Navigation from "../shared/Navigation";
import Footer from "../shared/Footer";
import CardPerson from "../components/CardPerson";
import BioContText from "../components/BioContText";
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
import { ReactComponent as ArrowIconLeft } from "../images/icon/arrow-left.svg";

const PersonWrapper = styled.div`
  background: #f5f5f5;
`;

const BackIcon = styled.div`
  background-color: #f5f5f5;
  padding: 48px 0px 40px 255px;
  button {
    display: flex;
    border: 0px solid #1b1a1a;
    background-color: #f5f5f5;
    color: #1b1a1a;
    &:hover {
      background-color: #dbd8d8;
      color: #1b1a1a;
      border: #1b1a1a;
      border: 0px solid #1b1a1a;
    }
    svg {
      padding-right: 8px;
    }
  }
`;

const ContentTop = styled.div`
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentBottom = styled.div`
  background-color: #dbd8d8;
  h2 {
    font-family: "Noto Sans CJK TC";
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 150%;
    padding: 40px 0px 24px 0px;
  }
  text-align: center;
  button {
    margin-top: 40px;
    margin-bottom: 104px;
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
  return (
    <PersonWrapper>
      <Navigation />
      <BackIcon>
        <Link to="/biography" style={{ textDecoration: "none" }}>
          <button>
            <ArrowIconLeft />
            <Typography variant="body1" component="p">
              人物誌
            </Typography>
          </button>
        </Link>
      </BackIcon>
      <ContentTop>
        <BioContText />
      </ContentTop>
      <ContentBottom>
        <h2>相關文章</h2>
        <CardPerson />
        <Link to="/biography" style={{ textDecoration: "none" }}>
          <Button variant="outlined" size="large">
            更多小人物
          </Button>
        </Link>
      </ContentBottom>
      <Footer />
    </PersonWrapper>
  );
}
export default Person;
