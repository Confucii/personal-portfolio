import { motion } from "framer-motion";
import "./styles/Hero.css";

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  hidden: { opacity: 0, y: -50 },
};

function Hero() {
  return (
    <div className="Hero">
      <div className="flex">
        <motion.div initial="hidden" whileInView="visible" variants={variants}>
          <div className="square"></div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
