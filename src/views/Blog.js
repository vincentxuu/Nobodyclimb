import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import Footer from './Footer';

const BlogWapper = styled.div`
  background: #F5F5F5;
`

function Blog() {
    
  return (
    <BlogWapper>
      <Header/>
      
      <Footer/>
    </BlogWapper>
  );
}
export default Blog;
