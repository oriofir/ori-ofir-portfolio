import React from "react";
import { Container } from "react-bootstrap";
import "./TechStack.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

function TechStack() {
  return (
    <>
      <Container className="tech-container">
        <div className="languages-title">LANGUAGES</div>
        <FontAwesomeIcon icon="Moon" color="White" />
      </Container>
    </>
  );
}

export default TechStack;
