import Typewriter from "typewriter-effect";
import "./styles/Hero.css";
import { motion } from "framer-motion";
import lightImg from "../../assets/images/shell.svg";
import darkImg from "../../assets/images/shell-dark.svg";

const staggerVariants = {
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 1.7 },
  },
  visibleDelayed: {
    transition: { staggerChildren: 0.1, delayChildren: 2.5 },
  },
};

const childrenVariants = {
  visible: {
    fontSize: "clamp(2.5rem, 6vw + 3.5rem, 5rem)",
    transition: { type: "spring", ease: "anticipate" },
  },
  visibleDelayed: {
    fontSize: "clamp(2.5rem, 6vw + 3.5rem, 5rem)",
    transition: { type: "spring", ease: "anticipate" },
  },
  hidden: { fontSize: 0 },
};

const typewriterVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 3.5,
      type: "spring",
      ease: "anticipate",
    },
  },
};

const name = "Oleksii".split("");
const surname = "Avdieiev".split("");

function Hero({ darkMode }: { darkMode: boolean }) {
  const img = darkMode ? darkImg : lightImg;

  return (
    <div className="Hero">
      <img className="background-vector" src={img} alt="" />
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={staggerVariants}
        className="name"
      >
        {name.map((letter, id) => {
          return (
            <motion.span key={id} variants={childrenVariants}>
              {letter}
            </motion.span>
          );
        })}
      </motion.h1>
      <motion.h1
        initial="hidden"
        animate="visibleDelayed"
        variants={staggerVariants}
        className="surname"
      >
        {surname.map((letter, id) => {
          return (
            <motion.span key={id} variants={childrenVariants}>
              {letter}
            </motion.span>
          );
        })}
      </motion.h1>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={typewriterVariants}
        className="typewriter-container"
      >
        <Typewriter
          options={{
            strings: [
              "Aspiring Web Developer",
              "Tech Enthusiast",
              "Lifelong Learner",
              "Well Behaved Human",
            ],
            delay: 100,
            autoStart: true,
            loop: true,
            cursor: "▍",
            cursorClassName: "typewriter-cursor",
            wrapperClassName: "typewriter-class",
          }}
        />
      </motion.div>
    </div>
  );
}

export default Hero;
