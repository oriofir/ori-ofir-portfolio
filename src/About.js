import React from "react";

function About(props) {
  const handleEmailClick = () => {
    window.open("mailto: oriofir00@gmail.com");
  };

  const handleLinkedInCLick = () => {
    window.open("https://www.linkedin.com/in/oriofir/");
  };
  return (
    <div>
      <h1>About</h1>
      <p>
        I am a skilled fullstack software engineer with a passion for design and
        creative collaboration based in Los Angeles CA. Experienced in
        Javascript, Python, HTML5/CSS, React, Node, jquery as well as database
        frameworks such as MongoDb and SQL. As a designer, musician, and art
        director, I love taking these passions into the sphere of software
        development for outside the box thinking in order to link together
        culture and optimized human interactions.{" "}
      </p>
      <h4>Contact:</h4>
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
  );
}

export default About;
