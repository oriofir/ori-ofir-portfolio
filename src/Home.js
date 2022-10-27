import React from "react";
import "./home.css";

import Collectus_Homepage from "./Images/Collectus_Homepage.png";
import Laura_Homepage from "./Images/Laura_Homepage.png";
import Responsive_Product_Card_Project from "./Images/Responsive_Product_Card_Project.jpg";
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

  function openCard() {
    window.open(`https://peppy-nasturtium-fa6911.netlify.app/`);
  }

  return (
    <>
      <h1>Ori Ofir </h1>
      <h3>Fullstack Web Developer</h3>

      <img
        className="port-img"
        src={OR_1_Synth_Homepage}
        alt="OR-1 Browser Synthesizer"
      />
      <div>OR-1 Browser Synthesizer</div>
      <p>
        A full stack browser synthesizer using Tone.js, React, Python, and
        Django
      </p>
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
        onClick={openSynth}
      >
        GitHub
      </button>
      <img className="port-img" src={Collectus_Homepage} alt="Collectus" />

      <h3>Collectus</h3>
      <p>
        A fullstack application to house collectable items using React, MongoDB,
        Node.js, and Express
      </p>
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
        onClick={openCollectus}
      >
        GitHub
      </button>

      <img className="port-img" src={Laura_Homepage} alt="Laura" />

      <h3>L.A.U.R.A. Recs Website</h3>
      <p>
        Application showcasing LA based record label L.A.U.R.A. Recs using React
        as well as the last.fm API
      </p>
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
        onClick={openLaura}
      >
        GitHub
      </button>
      <img
        className="port-img"
        src={Responsive_Product_Card_Project}
        alt="Laura"
      />

      <h3>Responsive Product Card</h3>
      <p>HTML/CSS challenge showcasing basic front end design skills</p>
      <button className="button" variant="outline-dark" onClick={openCard}>
        Site
      </button>
      <button
        className="button
      "
        onClick={openCard}
      >
        GitHub
      </button>
    </>
  );
}

export default Home;
