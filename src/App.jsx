import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import ProjectDetail from "./components/ProjectDetail";


import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
  
      <ScrollToTop behavior="auto" />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}
