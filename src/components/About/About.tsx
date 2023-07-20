import "./styles/About.css";
import { skills } from "../data";
import Skill from "./Skill";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", delay: 4 }}
      className="About"
    >
      <h1 className="section-title">About</h1>
      <p className="about-description">
        Passionate about problem solving. I possess an analytical mindset and a
        relentless drive for growth. <br /> <br />
        Programming enthralls me as it grants the creative power to interact
        with technology actively, witnessing the immediate results of my work.
        My natural aptitude for it only fuels my passion further. <br /> <br />
        Since January 2023, I've been dedicated to web development, mastering
        React and JavaScript. Eager to expand my skillset even further, I'm
        setting my sights on Express.
      </p>
      <div className="skills-images">
        {skills.map((skill) => (
          <Skill key={skill.name} name={skill.name} image={skill.link} />
        ))}
      </div>
    </motion.div>
  );
}

export default About;
