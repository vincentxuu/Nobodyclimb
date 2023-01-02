import React, { useState } from 'react';
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import styled from '@emotion/styled';
import NobodyClimb from './pages/NobodyClimb';
import Person from './pages/Person';
import PersonContent from './pages/PersonContent';
import ClimbSpot from './pages/ClimbSpot';
import Photo from './pages/Photo';
import Blog from './pages/Blog';


function App()  {

  return (
    <Router>
        <Routes>
          <Route  path="/" element={<NobodyClimb />} />
          <Route  path="/person" element={<Person />} />
            <Route  path="/person/content" element={<PersonContent />} >
          </Route>
          <Route  path="/climbspot" element={<ClimbSpot />} />
          <Route  path="/photo" element={<Photo />} />
          <Route  path="/blog" element={<Blog />} />
        </Routes>
    </Router>
  );
}
export default App;
