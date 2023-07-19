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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet corrupti
        nemo consectetur sit quaerat esse odio, modi voluptate atque ex quas
        suscipit necessitatibus sed numquam dolore laudantium hic distinctio
        quos!
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
