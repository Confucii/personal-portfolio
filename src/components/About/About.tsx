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
        Driven by problem-solving and continual growth, my passion lies in
        programming, where creativity meets technological interaction. My skills
        in this realm have been honed through a deep dedication to mastering
        React and JavaScript since January 2023. <br />
        <br />
        Today, my pursuit of knowledge continues as I set my sights on expanding
        my skillset with Express. Eager to embrace the new opportunities that
        this learning venture presents, I am committed to delivering innovative
        and robust web solutions.
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
