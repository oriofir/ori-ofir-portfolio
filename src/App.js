import React from "react";
// import { Container } from "react-bootstrap";
// import Navigation from "./Navigation";
import Projects from "./Projects";
import About from "./About";
// import Projects from "./Projects";
import Resume from "./Resume";
import { Link } from "react-scroll";
import "./App.css";
import TechStack from "./TechStack";
import "animate.css";

// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <header className="nav">
        <nav className="nav__container__actions">
          <ul>
            <li>
              <Link activeClass="active" smooth spy to="about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="techstack">
                TECH STACK
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="projects">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="resume">
                RESUME
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section id="about">{<About />}</section>
      <section id="techstack">{<TechStack />}</section>
      <section id="projects">{<Projects />}</section>
      <section id="resume">{<Resume />}</section>
    </>
  );
}

export default App;
