import React from "react";
import { Container } from "react-bootstrap";
import "./About.css";

function About(props) {
  const handleEmailClick = () => {
    window.open("mailto: oriofir00@gmail.com");
  };

  const handleLinkedInCLick = () => {
    window.open("https://www.linkedin.com/in/oriofir/");
  };
  return (
    <>
      <Container>
        <div className="about-cont">
          <p className="about-body">
            I’m a software engineer currently working as a freelancer building
            out recaptcha, css, and form submissions in a Next.js React
            Application. Experienced in Javascript, Python, HTML5/CSS, React,
            Node, jquery as well as database frameworks such as MongoDb and SQL.
            As a designer, musician, and art director, I love taking these
            passions into the sphere of software development for outside the box
            thinking in order to link together culture and optimized human
            interactions.{" "}
          </p>
          <div>Contact:</div>
          <div
            className="contact"
            onClick={handleEmailClick}
            style={{ cursor: "pointer" }}
          >
            oriofir00@gmail.com
          </div>
          <div
            className="contact"
            onClick={handleLinkedInCLick}
            style={{ cursor: "pointer" }}
          >
            Linked In
          </div>
        </div>
      </Container>
    </>
  );
}

export default About;
