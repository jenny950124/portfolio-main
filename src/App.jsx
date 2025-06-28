import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import FindMyPark from "./components/FindMyPark";
import HomerStCafe from "./components/HomerStCafe";
import GraphicDesign from "./components/GraphicDesign";

import './styles/global.css';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/1" element={<FindMyPark />} />
          <Route path="projects/2" element={<HomerStCafe />} />
          <Route path="projects/3" element={<GraphicDesign />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
