import React from "react";
import "./Projects.css";
import { Card, Container } from "react-bootstrap";
import Collectus_Homepage from "./Images/Collectus_Homepage.png";
import Laura_Homepage from "./Images/Laura_Homepage.png";
import Responsive_Product_Card_Project from "./Images/Responsive_Product_Card_Project.jpg";
import OR_1_Synth_Homepage from "./Images/OR_1_Synth_Homepage.png";
import "animate.css";
import laconic_homepage from "./Images/laconic_homepage.png";

// import { useInView } from "react-intersection-observer";

function Projects(props) {
  // const [isShown, setIsShown] = useState(false);

  function openSynth() {
    window.open(`https://or-1-synthesizer.netlify.app/`);
  }

  function openCollectus() {
    window.open(`https://animated-pony-a34044.netlify.app/collections`);
  }

  function openLaura() {
    window.open(`https://laurarecs.netlify.app/`);
  }

  function openCard() {
    window.open(`https://peppy-nasturtium-fa6911.netlify.app/`);
  }

  function openCardGit() {
    window.open(`https://github.com/oriofir/front-end-preview-card`);
  }

  function openSynthGit() {
    window.open(`https://github.com/oriofir/or-1-synth-project`);
  }

  function openCollectusGit() {
    window.open(`https://github.com/Team-This-Is-Fine`);
  }

  function openLauraGit() {
    window.open(`https://github.com/Team-This-Is-Fine`);
  }

  function openLaconic() {
    window.open("https://www.laconic.com/");
  }

  function openLaconicGit() {
    window.open("https://github.com/LaconicNetwork");
  }

  return (
    <>
      <Container className="general-card">
        <div className="projects-title">PROJECTS</div>
        <Container className="card-container">
          <Card className="laconic-card">
            <Card.Body>
              <img
                // s
                className="port-img"
                src={laconic_homepage}
                alt="laconic-homepage"
              />

              <div className="card-title">Laconic Network</div>

              <Container className="card-features">
                <Card.Text className="text-description">
                  Site for the Laconic Network using React, Typescript, Next.js,
                  Node, and Hubspot API
                </Card.Text>

                <button
                  className="button
      "
                  variant="outline-dark"
                  onClick={openLaconic}
                >
                  Site
                </button>
                <button
                  className="button
      "
                  variant="outline-dark"
                  onClick={openLaconicGit}
                >
                  GitHub
                </button>
              </Container>
            </Card.Body>
          </Card>
          <Card className="or1-card">
            <Card.Body
            // onMouseEnter={() => setIsShown(true)}
            // onMouseLeave={() => setIsShown(false)}
            >
              <img
                // s
                className="port-img"
                src={OR_1_Synth_Homepage}
                alt="OR-1 Browser Synthesizer"
              />

              <div className="card-title">OR-1 Browser Synthesizer</div>
              {/* {isShown && ( */}
              <Container className="card-features">
                <Card.Text className="text-description">
                  A full stack browser synthesizer using Tone.js, React, Python,
                  and Django
                </Card.Text>
                <button
                  className="button
      "
                  variant="outline-dark"
                  onClick={openSynth}
                >
                  Site
                </button>
                <button
                  className="button
      "
                  variant="outline-dark"
                  onClick={openSynthGit}
                >
                  GitHub
                </button>
              </Container>
              {/* )} */}
            </Card.Body>
          </Card>
          <Card className="collectus-card">
            <Card.Body
            // onMouseEnter={() => setIsShown(true)}
            // onMouseLeave={() => setIsShown(false)}
            >
              <img
                // s
                className="port-img"
                src={Collectus_Homepage}
                alt="Collectus Homepage"
              />

              <div className="card-title">Collectus</div>
              {/* {isShown && ( */}
              <Container className="card-features">
                <Card.Text className="text-description">
                  A fullstack application to house collectable items using
                  React, MongoDB, Node.js, and Express
                </Card.Text>
                <button
                  className="button
      "
                  variant="outline-dark"
                  onClick={openCollectus}
                >
                  Site
                </button>
                <button
                  className="button
      "
                  variant="outline-dark"
                  onClick={openCollectusGit}
                >
                  GitHub
                </button>
              </Container>
              {/* )} */}
            </Card.Body>
          </Card>
          <Card className="laura-card">
            <Card.Body
            // onMouseEnter={() => setIsShown(true)}
            // onMouseLeave={() => setIsShown(false)}
            >
              <img
                // s
                className="port-img"
                src={Laura_Homepage}
                alt="Laura Homepage"
              />

              <div className="card-title">L.A.U.R.A. Recs Website</div>
              {/* {isShown && ( */}
              <Container className="card-features">
                <Card.Text className="text-description">
                  Application showcasing LA based record label L.A.U.R.A. Recs
                  using React as well as the last.fm API
                </Card.Text>
                <button
                  className="button
      "
                  variant="outline-dark"
                  onClick={openLaura}
                >
                  Site
                </button>
                <button
                  className="button
      "
                  variant="outline-dark"
                  onClick={openLauraGit}
                >
                  GitHub
                </button>
              </Container>
              {/* )} */}
            </Card.Body>
          </Card>
          <Card className="responsive-card">
            <Card.Body
            // onMouseEnter={() => setIsShown(true)}
            // onMouseLeave={() => setIsShown(false)}
            >
              <img
                // s
                className="port-img"
                src={Responsive_Product_Card_Project}
                alt="Laura Homepage"
              />

              <div className="card-title">Responsive Product Card</div>
              {/* {isShown && ( */}
              <Container className="card-features">
                <Card.Text className="text-description">
                  HTML/CSS card showcasing basic front end design skills
                </Card.Text>
                <button
                  className="button
      "
                  variant="outline-dark"
                  onClick={openCard}
                >
                  Site
                </button>
                <button
                  className="button
      "
                  variant="outline-dark"
                  onClick={openCardGit}
                >
                  GitHub
                </button>
              </Container>
              {/* )} */}
            </Card.Body>
          </Card>
        </Container>
      </Container>
    </>
  );
}

export default Projects;
