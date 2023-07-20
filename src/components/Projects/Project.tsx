import "./styles/Project.css";
import liveLinkImg from "../../assets/images/open-in-new.svg";
import gitLinkImg from "../../assets/images/source-repository.svg";
import { motion } from "framer-motion";

function Project({
  project,
}: {
  project: {
    name: string;
    imgLink: string;
    description: string;
    technologies: string;
    liveLink: string;
    gitLink: string;
  };
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ ease: "easeInOut", duration: 0.8 }}
      className="Project"
    >
      <div className="project-description">
        <h2 className="project-title">{project.name}</h2>
        <p className="project-description-text">{project.description}</p>
        <p className="project-technologies">
          Built with: {project.technologies}
        </p>
        <div className="project-links">
          <motion.a
            whileHover={{ scale: 1.1 }}
            className="image-link"
            href={project.liveLink}
          >
            <img src={liveLinkImg} alt="live demo link" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            className="image-link"
            href={project.gitLink}
          >
            <img src={gitLinkImg} alt="git link" />
          </motion.a>
        </div>
      </div>
      <img className="project-image" src={project.imgLink} alt={project.name} />
    </motion.div>
  );
}

export default Project;
