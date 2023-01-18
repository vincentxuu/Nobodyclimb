import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Carousel from "react-grid-carousel";

import {
  Box,
  Card,
  Typography,
  Stack,
  Avatar,
  AvatarGroup,
  Button,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

const Container = styled.div`
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
  max-width: 1120px;
  background: #f3f3f3;
`;

const Item = styled.div`
  position: relative;
  height: 460px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
`;

const Index = styled.div`
  position: absolute;
  background: #232323bf;
  color: #ffffffc9;
  padding: 2px 8px;
  font-size: 12px;
  border-radius: 20px;
  top: 5px;
  right: 5px;
`;

const Detail = styled.div`
  position: absolute;
  bottom: 0;
  color: #fff;
  padding: 15px;
  width: 100%;
  box-sizing: border-box;
  background: linear-gradient(0deg, black, transparent);
  padding-bottom: 10px;
  border-radius: 8px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const Type = styled.div`
  background-color: black;
  width: 81px;
  height: 25px;
  font-family: "Noto Sans CJK TC";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 200%;
  border-radius: 4px;
  text-align: center;
`;

const Time = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

const Members = [
  {
    id: 0,
    name: "Tiff",
    image: "https://cataas.com/cat/0",
  },
  {
    id: 1,
    name: "小許",
    image: "https://cataas.com/cat/1",
  },
  {
    id: 2,
    name: "小貝",
    image: "https://cataas.com/cat/2",
  },
  {
    id: 3,
    name: "葦",
    image: "https://cataas.com/cat/3",
  },
  {
    id: 4,
    name: "羊",
    image: "https://cataas.com/cat/4",
  },
  {
    id: 5,
    name: "Sucre",
    image: "https://cataas.com/cat/5",
  },
  {
    id: 6,
    name: "東玉",
    image: "https://cataas.com/cat/6",
  },
  {
    id: 7,
    name: "百戰不殆",
    image: "https://cataas.com/cat/7",
  },
  {
    id: 8,
    name: "Yvonne",
    image: "https://cataas.com/cat/8",
  },
  {
    id: 9,
    name: "珮珮",
    image: "https://cataas.com/cat/9",
  },
  {
    id: 10,
    name: "袋鼠",
    image: "https://cataas.com/cat/10",
  },
  {
    id: 11,
    name: "Karen",
    image: "https://cataas.com/cat/11",
  },
  {
    id: 12,
    name: "預知",
    image: "https://cataas.com/cat/12",
  }
];

const App = () => {
  return (
    <Container>
      {Members.map(({ id, name }) => (
        <Box >{name}</Box>
      ))}
    </Container>
  );
};

export default App;
