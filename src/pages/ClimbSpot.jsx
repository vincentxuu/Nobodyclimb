import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import Footer from './Footer';

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
