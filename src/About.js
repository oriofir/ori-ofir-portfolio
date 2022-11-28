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
      <Container className="about-container">
        <Image className="profile-pic" src={profile_pic}></Image>
        <Container className="aboutText">
          <h1 className="name">ORI OFIR</h1>
          <h3 className="title">FREELANCE SOFTWARE ENGINEER</h3>
          <div className="about-body">
            I’m a software engineer currently working as a freelancer building
            out recaptcha, HTML/CSS, and form submissions in a Next.js React
            Application. Experienced in Javascript, Python, HTML5/CSS, React,
            Node, jquery as well as database frameworks such as MongoDb and SQL.
            As a designer, musician, and art director, I love taking these
            passions into the sphere of software development for outside the box
            thinking in order to link together culture and optimized human
            interactions.{" "}
          </div>
        </Container>
      </Container>
      <Container className="contact-container">
        <div className="contact-title">WORK WITH ME</div>
        <Container className="contactButtons">
          <div
            className="contact-email"
            onClick={handleEmailClick}
            style={{ cursor: "pointer" }}
          >
            oriofir00@gmail.com
          </div>
          <div
            className="contact-linkedin"
            onClick={handleLinkedInCLick}
            style={{ cursor: "pointer" }}
          >
            LinkedIn
          </div>
        </Container>
      </Container>
    </>
  );
}

export default About;
