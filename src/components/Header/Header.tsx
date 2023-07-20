import "./styles/Header.css";
import sun from "../../assets/images/white-balance-sunny.svg";
import moon from "../../assets/images/weather-night.svg";
import logo from "../../assets/images/logo.svg";
import menu from "../../assets/images/menu.svg";
import { useGlitch } from "react-powerglitch";
import { motion } from "framer-motion";
import { navNames } from "../data";

const headerVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      ease: "anticipate",
      duration: 1,
      when: "beforeChildren",
    },
  },
  hidden: {
    opacity: 0,
    y: -50,
  },
};

const navVariants = {
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const childrenVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      ease: "anticipate",
    },
  },
  hidden: {
    opacity: 0,
    y: -50,
  },
};

function Header({
  setDarkMode,
  darkMode,
  setOpenNav,
}: {
  darkMode: boolean;
  setDarkMode: Function;
  setOpenNav: Function;
}) {
  const glitch = useGlitch({
    playMode: "hover",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 750,
      iterations: 1,
      easing: "ease-in-out",
    },
    glitchTimeSpan: {
      start: 0,
      end: 1,
    },
    shake: {
      velocity: 15,
      amplitudeX: 0.2,
      amplitudeY: 0.2,
    },
    slice: {
      count: 6,
      velocity: 15,
      minHeight: 0.02,
      maxHeight: 0.15,
      hueRotate: false,
    },
    pulse: false,
  });

  function handleMode() {
    setDarkMode((mode: boolean) => !mode);
  }

  function handleMobileNav() {
    setOpenNav((mode: boolean) => !mode);
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className="Header"
    >
      <motion.a variants={childrenVariants} href="#Home">
        <img
          className="logo"
          ref={glitch.ref}
          onMouseEnter={glitch.startGlitch}
          src={logo}
          alt="logo"
        />
      </motion.a>
      <motion.nav variants={navVariants} className="navigation">
        {navNames.map((link) => {
          return (
            <motion.a
              whileHover={{
                scale: 1.1,
              }}
              variants={childrenVariants}
              key={link}
              className="jump-link"
              href={`#${link}`}
            >
              {link}
            </motion.a>
          );
        })}
        <motion.button
          variants={childrenVariants}
          whileHover={{ scale: 1.1 }}
          className="mode-btn"
          onClick={handleMode}
        >
          <img
            className={`mode-img ${!darkMode ? "light" : "dark"}`}
            src={!darkMode ? moon : sun}
            alt="color mode"
          />
        </motion.button>
      </motion.nav>
      <motion.button
        variants={childrenVariants}
        className="menu-btn"
        onClick={handleMobileNav}
      >
        <img className="menu" src={menu} alt="menu" />
      </motion.button>
    </motion.div>
  );
}

export default Header;
