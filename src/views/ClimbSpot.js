import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from '../views/Header';
import Footer from '../views/Footer';

const ClimbSpotWapper = styled.div`
  background: #F5F5F5;
`

function ClimbSpot() {
    
  return (
    <ClimbSpotWapper>
      <Header/>
      
      <Footer/>
    </ClimbSpotWapper>
  );
}
export default ClimbSpot;
