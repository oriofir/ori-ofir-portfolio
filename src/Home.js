import React from "react";
import "./home.css";
import { Button } from "react-bootstrap";
import Collectus_Homepage from "./Images/Collectus_Homepage.png";
import Laura_Homepage from "./Images/Laura_Homepage.png";
import OR_1_Synth_Homepage from "./Images/OR_1_Synth_Homepage.png";

function Home(props) {
  function openSynth() {
    window.open(`https://or-1-synthesizer.netlify.app/`);
  }

  function openCollectus() {
    window.open(`https://animated-pony-a34044.netlify.app/collections`);
  }

  function openLaura() {
    window.open(`https://laurarecs.netlify.app/`);
  }

  return (
    <>
      <h1>Ori Ofir </h1>
      <h3>Fullstack Web Developer</h3>

      <img
        className="d-block w-100"
        src={OR_1_Synth_Homepage}
        alt="OR-1 Browser Synthesizer"
        style={{
          width: "100%",
          objectFit: "cover",
          overflow: "hidden",
          borderRadius: 10,
        }}
      />
      <h3>OR-1 Browser Synthesizer</h3>
      <p>
        A full stack browser synthesizer using Tone.js, React, Python, and
        Django
      </p>
      <Button variant="outline-dark" onClick={openSynth}>
        View
      </Button>
      <img
        className="d-block w-100"
        src={Collectus_Homepage}
        alt="Collectus"
        style={{
          width: "100%",
          objectFit: "cover",
          overflow: "hidden",
          borderRadius: 10,
        }}
      />

      <h3>Collectus</h3>
      <p>
        A fullstack application to house collectable items using React, MongoDB,
        Node.js, and Express
      </p>
      <Button variant="outline-dark" onClick={openCollectus}>
        View
      </Button>

      <img
        className="d-block w-100"
        src={Laura_Homepage}
        alt="Laura"
        style={{
          width: "100%",
          objectFit: "cover",
          overflow: "hidden",
          borderRadius: 10,
        }}
      />

      <h3>L.A.U.R.A. Recs Website</h3>
      <p>
        Application showcasing LA based record label L.A.U.R.A. Recs using React
        as well as the last.fm API
      </p>
      <Button variant="outline-dark" onClick={openLaura}>
        View
      </Button>
    </>
  );
}

export default Home;
