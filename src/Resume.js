import React from "react";
import { Image, Container } from "react-bootstrap";

import Ori_Ofir_Single_Page_Resume_Web_Dev from "./Images/Ori_Ofir_Single_Page_Resume_Web_Dev.jpg";

function Resume(props) {
  const handleClick = () => {
    window.open(
      "https://docs.google.com/document/d/1Pdg6seUzxzDU1tsypwpi6qjEE9rJEnIxzpkH9cAz1ZI/edit"
    );
  };
  return (
    <Container>
      <Image
        style={{ maxWidth: 1000, cursor: "pointer" }}
        src={Ori_Ofir_Single_Page_Resume_Web_Dev}
        onClick={handleClick}
      />
    </Container>
  );
}

export default Resume;
