import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const HomeWapper = styled.div`
  background: #F5F5F5;
`

const Home=()=> {

  return (
    <HomeWapper>
      <Header/>
      <Content/>
      <Footer/>
    </HomeWapper>
  );
}
export default Home;
