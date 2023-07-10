import { useRandomReveal } from "react-random-reveal";
import "./styles/Greeting.css";
import { motion } from "framer-motion";
import { useState } from "react";

const greetVariants = {
  open: { clipPath: "inset(0% 0% 0% 0% round 0px)" },
  closed: {
    clipPath: "inset(50% 50% 50% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 1,
    },
  },
};

const textVariants = {
  closed: {
    fontSize: 0,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 1,
    },
  },
};

function Greeting({ setIsGreeted }: { setIsGreeted: Function }) {
  const [animate, setAnimate] = useState(true);

  const welcome = useRandomReveal({
    isPlaying: true,
    duration: 2,
    revealDuration: 1,
    characterSet: [0, 1],
    updateInterval: 0.1,
    ignoreCharacterSet: [" "],
    characters: "<span className='greeting'> Welcome! </span>",
  });

  const load = useRandomReveal({
    isPlaying: true,
    duration: 4,
    revealDuration: 0.5,
    characterSet: [0, 1],
    updateInterval: 0.1,
    ignoreCharacterSet: [" "],
    characters:
      "<span className='loading'> Loading modern interface... </span>",
    onComplete: () => {
      setTimeout(() => {
        setAnimate(false);
      }, 1000);
      setTimeout(() => {
        setIsGreeted(true);
      }, 2800);
    },
  });

  return (
    <motion.div
      initial={false}
      animate={animate ? "open" : "closed"}
      variants={greetVariants}
      className="Greeting"
    >
      <motion.div variants={textVariants} className="welcome">
        {welcome}
      </motion.div>
      <motion.div variants={textVariants} className="load">
        {load}
      </motion.div>
    </motion.div>
  );
}

export default Greeting;
