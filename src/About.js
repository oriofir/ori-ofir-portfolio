import React from "react";
import { Container, Image } from "react-bootstrap";
import profile_pic from "./Images/profile_pic.jpg";
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
        <Image className="profile-pic" src={profile_pic}></Image>
        <div className="about-container">
          <p className="about-body">
            I’m a software engineer currently working as a freelancer building
            out recaptcha, HTML/CSS, and form submissions in a Next.js React
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
