import "./styles/Projects.css";
import { projects } from "../data";
import Project from "./Project";
import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ when: "beforeChildren", delay: 4, ease: "easeInOut" }}
      className="Projects"
    >
      <h1 className="section-title">Projects</h1>
      <div className="projects-container">
        {projects.map(
          (
            project: {
              name: string;
              imgLink: string;
              description: string;
              technologies: string;
              liveLink: string;
              gitLink: string;
            },
            id
          ) => {
            return <Project key={id} project={project} />;
          }
        )}
      </div>
    </motion.div>
  );
}

export default Projects;
