import React, { useEffect } from "react";
import "./Projects.css";

import Collectus_Homepage from "./Images/Collectus_Homepage.png";
import Laura_Homepage from "./Images/Laura_Homepage.png";
import Responsive_Product_Card_Project from "./Images/Responsive_Product_Card_Project.jpg";
import OR_1_Synth_Homepage from "./Images/OR_1_Synth_Homepage.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

  const boxVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <>
      <motion.img
        ref={ref}
        variants={boxVariant}
        animate={control}
        initial="hidden"
        className="port-img"
        src={OR_1_Synth_Homepage}
        alt="OR-1 Browser Synthesizer"
      />
      <motion.div
        ref={ref}
        variants={boxVariant}
        animate={control}
        initial="hidden"
      >
        OR-1 Browser Synthesizer
      </motion.div>
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
