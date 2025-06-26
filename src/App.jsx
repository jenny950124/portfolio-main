import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop'; 
import Layout from "./components/Layout"; 
import Home from "./components/Home";     
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  return (
   <HashRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectDetail />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
  </HashRouter>
  );
}

export default App;
