import React from "react";
import { Container } from "react-bootstrap";
// import Navigation from "./Navigation";
import Projects from "./Projects";
import About from "./About";
// import Projects from "./Projects";
import Resume from "./Resume";

import "./App.css";
// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container className="container">
      <h1 className="name">Ori Ofir </h1>
      <h3>Fullstack Web Developer</h3>

      <About />
      <Projects />
      <Resume />
    </Container>
  );
}

export default App;
