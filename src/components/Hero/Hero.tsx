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
    fontSize: "clamp(2rem, 4vw + 2rem, 5rem)",
    transition: { type: "spring", ease: "anticipate" },
  },
  visibleDelayed: {
    fontSize: "clamp(2rem, 4vw + 2rem, 5rem)",
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

const name = "Alex".split("");
const surname = "Avdeyev".split("");

function Hero({ darkMode }: { darkMode: boolean }) {
  const img = darkMode ? darkImg : lightImg;

  return (
    <div className="Hero">
      <img className="background-vector" src={img} alt="" />
      <motion.div
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
      </motion.div>
      <motion.div
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
      </motion.div>
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
              "Persistent Coder",
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
