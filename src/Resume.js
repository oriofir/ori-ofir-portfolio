import React from "react";
import { Image, Container } from "react-bootstrap";
import "./Resume.css";

import Ori_Ofir_Single_Page_Resume_Web_Dev from "./Images/___ Ori Ofir Single Page Resume Web Dev (1)_Page_1.jpg";

function Resume(props) {
  // const handleClick = () => {
  //   window.open(
  //     "https://docs.google.com/document/d/1Pdg6seUzxzDU1tsypwpi6qjEE9rJEnIxzpkH9cAz1ZI/edit"
  //   );
  // };

  const downloadPDF = () => {
    fetch("___ Ori Ofir Single Page Resume Web Dev.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "___ Ori Ofir Single Page Resume Web Dev (1).pdf";
        alink.click();
      });
    });
  };
  return (
    <Container className="resume-container">
      <div className="resume-title">RESUME</div>

      <button type="button" className="res-download" onClick={downloadPDF}>
        Download Resume
      </button>

      {/* <button className="res-download" value="download" onClick={downloadPDF}>
        DOWNLOAD RESUME
      </button> */}

      <Image
        className="resume"
        style={{ maxWidth: 1000 }}
        src={Ori_Ofir_Single_Page_Resume_Web_Dev}
      />
    </Container>
  );
}

export default Resume;
