import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Carousel from "react-grid-carousel";
import newsList from "../components/mockNewsList.json";

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
  height:25px;
  font-family: 'Noto Sans CJK TC';
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

const App = () => {
  return (
    <Container>
      <Carousel>
        {newsList.map(({ imageSrc, title, type}, i) => (
          <Carousel.Item key={i}>
            <Item img={imageSrc}>
              <Index>
                {i + 1}/{newsList.length}
              </Index>
              <Detail>
                <Type>{type}</Type>
                <Title>{title}</Title>
              </Detail>
            </Item>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default App;
