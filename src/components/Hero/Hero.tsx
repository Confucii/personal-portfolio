import Typewriter from "typewriter-effect";
import "./styles/Hero.css";

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  hidden: { opacity: 0, y: -50 },
};

function Hero() {
  return (
    <div className="Hero anchor" id="Home">
      <Typewriter
        options={{
          strings: [
            "Aspiring Web Developer",
            "Tech Enthusiast",
            "Lifelong Learner",
            "Well Behaved Human",
          ],
          delay: 100,
          autoStart: true,
          loop: true,
          cursor: "▍",
          cursorClassName: "typewriter-cursor",
        }}
      />
    </div>
  );
}

export default Hero;
