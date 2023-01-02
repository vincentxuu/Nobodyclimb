import React, { useState } from 'react';
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import styled from '@emotion/styled';
import NobodyClimb from './views/NobodyClimb';
import Person from './views/Person';
import PersonContent from './views/PersonContent';
import ClimbSpot from './views/ClimbSpot';
import Photo from './views/Photo';
import Blog from './views/Blog';


function App()  {

  return (
    <Router>
        <Routes>
          <Route  path="/Nobodyclimb" element={<NobodyClimb />} />
          <Route  path="/person" element={<Person />} />
            <Route  path="/person/content" element={<PersonContent />} >
          </Route>
          <Route  path="/climbspot" element={<ClimbSpot />} />
          <Route  path="/photo" element={<Photo />} />
          <Route  path="/blog" element={<Blog />} />
          <Route  path="*" element={<NobodyClimb />} />
        </Routes>
    </Router>
  );
}
export default App;
