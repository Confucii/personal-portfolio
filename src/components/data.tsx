import test from "../assets/images/panel.png";
import git from "../assets/images/github.svg";
import linkedin from "../assets/images/linkedin.svg";
import email from "../assets/images/mail.svg";

export const navNames = ["Home", "About", "Projects", "Contacts"];

export const skills = [
  {
    name: "HTML",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
  },
  {
    name: "CSS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  },
  {
    name: "Javascript",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Typescript",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Jest",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  },
  {
    name: "Webpack",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
  },
  {
    name: "Git",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Node JS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Firebase",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "npm",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
];

export const projects = [
  {
    name: "Test",
    imgLink: test,
    description:
      "This is a test description of the project. It is here so that I can test how much the text affects the height of the element. ",
    technologies: "HTML, CSS, React, NodeJS",
    liveLink: "google.com",
    gitLink: "google.com",
  },
  {
    name: "Test",
    imgLink: test,
    description:
      "This is a test description of the project. It is here so that I can test how much the text affects the height of the element.",
    technologies: "HTML, CSS, React, NodeJS",
    liveLink: "google.com",
    gitLink: "google.com",
  },
];

export const links = [
  {
    alt: "git",
    link: "https://github.com/Confucii",
    image: git,
    text: "Discover all my work here!",
  },
  {
    alt: "email",
    link: "mailto:oleksii.avdieiev.work@gmail.com",
    image: email,
    text: "Write me an email!",
  },
  {
    alt: "linkedin",
    link: "https://www.linkedin.com/in/confucii/",
    image: linkedin,
    text: "Connect with me on LinkedIn!",
  },
];
