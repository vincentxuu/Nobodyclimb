import React, { useState } from 'react';
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import styled from '@emotion/styled';
import Home from './views/Home';
import Person from './views/Person';
import ClimbSpot from './views/ClimbSpot';
import Photo from './views/Photo';
import Blog from './views/Blog';


function App()  {

  return (
    <Router>
        <Routes>
          <Route  index  element={<Home/>} />
          <Route  path="/person" element={<Person/>} />
          <Route  path="/climbspot" element={<ClimbSpot/>} />
          <Route  path="/photo" element={<Photo/>} />
          <Route  path="/blog" element={<Blog/>} />
        </Routes>
    </Router>
  );
}
export default App;
