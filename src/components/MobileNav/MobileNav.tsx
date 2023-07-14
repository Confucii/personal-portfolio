import "./styles/MobileNav.css";
import sun from "../../assets/images/white-balance-sunny.svg";
import moon from "../../assets/images/weather-night.svg";
import close from "../../assets/images/close.svg";
import { motion } from "framer-motion";
import { navNames } from "../data";

const containerVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      ease: "anticipate",
      duration: 0.5,
      when: "beforeChildren",
    },
  },
  hidden: {
    opacity: 0,
    x: 300,
    transition: {
      type: "spring",
      ease: "anticipate",
      duration: 0.3,
      when: "afterChildren",
    },
  },
};

const navVariants = {
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const linkVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      ease: "anticipate",
    },
  },
  hidden: {
    opacity: 0,
    x: 75,
    transition: {
      ease: "easeInOut",
    },
  },
};

function MobileNav({
  setOpenNav,
  darkMode,
  setDarkMode,
}: {
  setOpenNav: Function;
  darkMode: boolean;
  setDarkMode: Function;
}) {
  function handleClose() {
    setOpenNav((status: boolean) => !status);
  }

  function handleMode() {
    setDarkMode((mode: boolean) => !mode);
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="MobileNav"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="mobile-nav-buttons">
        <button className="mode-btn" onClick={handleMode}>
          <img
            className={`mode-img ${!darkMode ? "light" : "dark"}`}
            src={!darkMode ? moon : sun}
            alt="color mode"
          />
        </button>
        <button className="close-btn" onClick={handleClose}>
          <img
            className={`close-img ${!darkMode && "light"}`}
            src={close}
            alt="exit"
          />
        </button>
      </div>

      <motion.nav variants={navVariants} className="mobile-navigation">
        {navNames.map((link) => {
          return (
            <motion.a
              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
              }}
              variants={linkVariants}
              key={link}
              className="mobile-jump-link"
              href={`#${link}`}
              onClick={handleClose}
            >
              {link}
            </motion.a>
          );
        })}
      </motion.nav>
    </motion.div>
  );
}

export default MobileNav;
