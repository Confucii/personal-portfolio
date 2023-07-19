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
      transition={{ ease: "easeInOut", duration: 0.8 }}
      className="Project"
    >
      <div className="project-description">
        <div className="project-title">{project.name}</div>
        <div className="project-description-text">{project.description}</div>
        <div className="project-technologies">
          Built with: {project.technologies}
        </div>
        <div className="project-links">
          <div className="project-live-link">
            <a className="image-link" href={project.liveLink}>
              <img src={liveLinkImg} alt="live demo link" />
            </a>
          </div>
          <div className="project-git-link">
            <a className="image-link" href={project.gitLink}>
              <img src={gitLinkImg} alt="git link" />
            </a>
          </div>
        </div>
      </div>
      <img className="project-image" src={project.imgLink} alt={project.name} />
    </motion.div>
  );
}

export default Project;
