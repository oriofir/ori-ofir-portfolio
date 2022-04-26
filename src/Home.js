import React from "react";
import { Carousel } from "react-bootstrap";
import Collectus_Homepage from "./Images/Collectus_Homepage.png";
import Laura_Homepage from "./Images/Laura_Homepage.png";
import OR_1_Synth_Homepage from "./Images/OR_1_Synth_Homepage.png";

function Home(props) {
  return (
    <>
      <Carousel interval={5000}>
        <Carousel.Item className="or-1-synth">
          <img
            className="d-block w-100"
            src={OR_1_Synth_Homepage}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="collectus">
          <img
            className="d-block w-100"
            src={Collectus_Homepage}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="laurarecs">
          <img
            className="d-block w-100"
            src={Laura_Homepage}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Home;
