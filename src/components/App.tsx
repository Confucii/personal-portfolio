import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import "./styles/App.css";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import { useState } from "react";
import Greeting from "./Greeting";

function App() {
  const [isGreeted, setIsGreeted] = useState(false);

  return !isGreeted ? (
    <Greeting setIsGreeted={setIsGreeted} />
  ) : (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <section>
          <Hero />
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
