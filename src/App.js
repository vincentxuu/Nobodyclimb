import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "@emotion/styled";
import Home from "./pages/Home";
import Biography from "./pages/Biography";
import BioContent from "./pages/BioContent";
import ClimbSpot from "./pages/ClimbSpot";
import PhotoAlbum from "./pages/PhotoAlbum";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import LoginTest from "./pages/LoginTest";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/biography/content" element={<BioContent />} />
        <Route path="/climbspot" element={<ClimbSpot />} />
        <Route path="/photoalbum" element={<PhotoAlbum />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logintest" element={<LoginTest />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;
