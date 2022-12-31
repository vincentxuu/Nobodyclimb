import React from 'react';
import styled from '@emotion/styled';
import Header from './views/header';
import Content from './views/content';
import Footer from './views/footer';

const AppWapper = styled.div`
  background: #F5F5F5;
`

function App() {
  return (
    <AppWapper>
      <Header/>
      <Content/>
      <Footer/>
    </AppWapper>
  );
}
export default App;
