import React, { useState, useCallback } from "react";
import styled from "styled-components";
import biographyList from "../components/biograohyList.json";
import Box from "@mui/material/Box";

const Container = styled.div`
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
  max-width: 1120px;
`;

const Item = styled.div`
  height: 460px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
`;

const Index = styled.div`
  background: #232323bf;
  padding: 2px 8px;
  font-size: 12px;
  border-radius: 20px;
  top: 5px;
  right: 5px;
`;

const Detail = styled.div`
  bottom: 0;
  padding: 15px;
  width: 100%;
  box-sizing: border-box;
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

const App = () => {
  return (
    <Container>
      <Box>
        {biographyList.map(({ imageSrc, title, type },i) => (
          <Box.Item key={i}>
            <Item img={imageSrc}></Item>
            <Detail>
              <Type>{type}</Type>
              <Title>{title}</Title>
            </Detail>
          </Box.Item>
        ))}
      </Box>
    </Container>
  );
};

export default App;
