import { motion } from "framer-motion";
import "./styles/SocialLink.css";

function SocialLink({
  alt,
  image,
  text,
  link,
}: {
  link: string;
  alt: string;
  image: string;
  text: string;
}) {
  return (
    <div className="SocialLink">
      <motion.a
        whileHover={{ scale: 1.1 }}
        className="contact-link-img"
        href={link}
        download={alt === "resume" ? "resume" : false}
      >
        <img src={image} alt={alt} />
      </motion.a>
      <p className="link-text">{text}</p>
    </div>
  );
}

export default SocialLink;
