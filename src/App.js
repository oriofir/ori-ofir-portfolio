import React from "react";
// import { Container } from "react-bootstrap";
// import Navigation from "./Navigation";
import Projects from "./Projects";
import About from "./About";
// import Projects from "./Projects";
import Resume from "./Resume";

import "./App.css";
import TechStack from "./TechStack";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faC } from "@fortawesome/free-solid-svg-icons";

library.add(faC);
// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <About />
      <TechStack />
      <Projects />
      <Resume />
    </>
  );
}

export default App;
