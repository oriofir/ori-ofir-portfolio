import React from "react";
import { Container, Image } from "react-bootstrap";
// import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
// import Projects from "./Projects";
import Resume from "./Resume";
import profile_pic from "./Images/profile_pic.jpeg";

import "./App.css";
// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container className="container">
      <h1>Ori Ofir </h1>
      <h3>Fullstack Web Developer</h3>
      <Image src={profile_pic}></Image>
      <About />
      <Home />
      <Resume />
      {/* <Navigation /> */}
      <main>
        {/* <Routes> */}
        {/* <Route path="/" element={<}></Route> */}
        {/* <Route path="/resume" element={}></Route> */}
        {/* <Route path="/about" element={}></Route> */}
        {/* </Routes> */}
      </main>
    </Container>
  );
}

export default App;
