import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from '../views/Header';
import Footer from '../views/Footer';

const PersonWapper = styled.div`
  background: #F5F5F5;
`

function Person() {
    
  return (
    <PersonWapper>
      <Header/>
      
      <Footer/>
    </PersonWapper>
  );
}
export default Person;
