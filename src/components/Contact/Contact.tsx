import "./styles/Contact.css";
import { links } from "../data";
import SocialLink from "./SocialLink";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ when: "beforeChildren", delay: 4, ease: "easeInOut" }}
      className="Contact"
    >
      <h1 className="section-title">Contacts</h1>
      <p className="contact-text">
        Hey! I am currently looking for new opportunities! If you are interested
        in my persona, please contact me by email or through LinkedIn.
      </p>
      <div className="contact-links">
        {links.map((link) => {
          return (
            <SocialLink
              link={link.link}
              image={link.image}
              text={link.text}
              alt={link.alt}
              key={link.alt}
            />
          );
        })}
      </div>
    </motion.div>
  );
}

export default Contact;
