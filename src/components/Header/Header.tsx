import "./styles/Header.css";
import sun from "../../assets/images/white-balance-sunny.svg";
import moon from "../../assets/images/weather-night.svg";
import logo from "../../assets/images/logo.svg";
import menu from "../../assets/images/menu.svg";
import { useGlitch } from "react-powerglitch";

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
    <div className="Header">
      <a href="#home">
        <img
          className="logo"
          ref={glitch.ref}
          onMouseEnter={glitch.startGlitch}
          src={logo}
          alt="logo"
        />
      </a>
      <nav className="navigation">
        <a className="jump-link" href="#home">
          Home
        </a>
        <a className="jump-link" href="#about">
          About
        </a>
        <a className="jump-link" href="#projects">
          Projects
        </a>
        <a className="jump-link" href="#contact">
          Contact
        </a>
        <button className="mode-btn" onClick={handleMode}>
          <img
            className={`mode-img ${!darkMode ? "light" : "dark"}`}
            src={!darkMode ? moon : sun}
            alt="color mode"
          />
        </button>
      </nav>
      <button className="menu-btn" onClick={handleMobileNav}>
        <img className="menu" src={menu} alt="menu" />
      </button>
    </div>
  );
}

export default Header;
