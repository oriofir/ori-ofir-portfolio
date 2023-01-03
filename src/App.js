import React from "react";
// import { Container } from "react-bootstrap";
import Navigation from "./Navigation";
import Projects from "./Projects";
import About from "./About";
// import Projects from "./Projects";
import Resume from "./Resume";

import "./App.css";
import TechStack from "./TechStack";
import "animate.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/techstack" element={<TechStack />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
      </Routes>
    </>
  );
}

export default App;
