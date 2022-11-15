import React from "react";
// import { Container } from "react-bootstrap";
// import Navigation from "./Navigation";
import Projects from "./Projects";
import About from "./About";
// import Projects from "./Projects";
import Resume from "./Resume";

import "./App.css";
// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <About />

      <Projects />
      <div className="resume-title">RESUME</div>
      <Resume />
    </>
  );
}

export default App;
