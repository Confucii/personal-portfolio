import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import "./styles/App.css";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import { useState } from "react";
import Greeting from "./Greeting";
import MobileNav from "./MobileNav/MobileNav";
import { AnimatePresence } from "framer-motion";

function App() {
  const [isGreeted, setIsGreeted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  if (darkMode) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }

  function handleStatusChange() {
    openNav && setOpenNav(!openNav);
  }

  return !isGreeted ? (
    <Greeting setIsGreeted={setIsGreeted} />
  ) : (
    <div className="App" onClick={handleStatusChange}>
      <header>
        <Header
          setOpenNav={setOpenNav}
          setDarkMode={setDarkMode}
          darkMode={darkMode}
        />
      </header>
      <AnimatePresence>
        {openNav && (
          <MobileNav
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            setOpenNav={setOpenNav}
          />
        )}
      </AnimatePresence>
      <main>
        <section className="section-hero">
          <Hero darkMode={darkMode} />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
