import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "@emotion/styled";
import Home from "./pages/Home";
import Biography from "./pages/Biography";
import BioContent from "./pages/BioContent";
import ClimbSpot from "./pages/ClimbSpot";
import PhotoAlbum from "./pages/PhotoAlbum";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/biography/content" element={<BioContent />}/>
        <Route path="/climbspot" element={<ClimbSpot />} />
        <Route path="/photoalbum" element={<PhotoAlbum />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;
