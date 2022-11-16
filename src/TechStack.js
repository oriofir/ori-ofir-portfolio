import React from "react";
import { Image, Container } from "react-bootstrap";
import "./TechStack.css";
import js_icon from "./Images/js_icon.png";
import node_icon from "./Images/node_icon.png";
import next_icon from "./Images/next_icon.png";
import react_icon from "./Images/react_icon.png";
import python_icon from "./Images/python_icon.png";
import html_icon from "./Images/html_icon.png";
import typescript_icon from "./Images/typescript_icon.png";
import css_icon from "./Images/css_icon.png";

function TechStack() {
  return (
    <>
      <Container className="tech-container">
        <div className="languages-title">LANGUAGES & FRAMEWORKS</div>
        <Container className="icon-container">
          <Image className="js-icon" src={js_icon}></Image>
          <Image className="python-icon" src={python_icon}></Image>
          <Image className="python-icon" src={typescript_icon}></Image>
          <Image className="react-icon" src={react_icon}></Image>
          <Image className="next-icon" src={next_icon}></Image>
          <Image className="node-icon" src={node_icon}></Image>
          <Image className="html-icon" src={html_icon}></Image>
          <Image className="css-icon" src={css_icon}></Image>
        </Container>
      </Container>
    </>
  );
}

export default TechStack;
