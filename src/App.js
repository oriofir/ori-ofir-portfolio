import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";

import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/resume" elements={<Resume />}></Route>
        </Routes>
      </main>
    </Container>
  );
}

export default App;
