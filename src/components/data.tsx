import git from "../assets/images/github.svg";
import linkedin from "../assets/images/linkedin.svg";
import email from "../assets/images/mail.svg";
import file from "../assets/images/file.svg";
import pdf from "../assets/CV.pdf";

export const navNames = ["Home", "About", "Projects", "Contacts"];

export const skills = [
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
    name: "Express",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "HTML",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
  },
  {
    name: "CSS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  },
  {
    name: "Node JS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
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
    name: "Blog",
    imgLink:
      "https://raw.githubusercontent.com/Confucii/confucii/main/images/cms.gif",
    description:
      "A blogging system consisting of three main parts: a RESTful API, a client-side application, and a content management system (CMS) for administrators. It allows admins to perform CRUD operations to manage blog efficiently.",
    technologies: "Typescript, React, NodeJS, Express, MongoDB",
    liveLink: "https://confucii-blog-client.netlify.app/",
    gitLink: "https://github.com/Confucii/blog-api",
  },
  {
    name: "Replica",
    imgLink:
      "https://raw.githubusercontent.com/Confucii/confucii/main/images/replica.gif",
    description:
      "Replica is a desktop website replicating main features and design of Youtube Music. It features custom built player, search, filtering and allows users to login through Google to save their favorites!",
    technologies: "Typescript, React, Firebase",
    liveLink: "https://confucii.github.io/replica/",
    gitLink: "https://github.com/Confucii/replica",
  },
  {
    name: "Tag it",
    imgLink:
      "https://raw.githubusercontent.com/Confucii/confucii/main/images/tag-it.gif",
    description:
      "Tag-it is a desktop website that lets users play a 'Where's Waldo'esque game with popular characters. It features a leaderboard to save best scores.",
    technologies: "Typescript, React, Firebase",
    liveLink: "https://confucii.github.io/tag-it/",
    gitLink: "https://github.com/Confucii/tag-it",
  },
  {
    name: "Weather App",
    imgLink:
      "https://raw.githubusercontent.com/Confucii/confucii/main/images/weather.png",
    description:
      "This desktop website utilizes Weather API and wraps it into slick and minimalistic design, to provide relevant weather data with no distractions.",
    technologies: "Javascript",
    liveLink: "https://confucii.github.io/weather/",
    gitLink: "https://github.com/Confucii/weather",
  },
  {
    name: "Shopping cart",
    imgLink:
      "https://raw.githubusercontent.com/Confucii/confucii/main/images/shopping_cart.png",
    description:
      "This desktop website is a 'Fake store' type of website, which tells a story of a shop selling power armor in a cyberpunk city.",
    technologies: "Javascript, React",
    liveLink: "https://confucii.github.io/shopping-cart/",
    gitLink: "https://github.com/Confucii/shopping-cart",
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
    alt: "linkedin",
    link: "https://www.linkedin.com/in/confucii/",
    image: linkedin,
    text: "Connect with me on LinkedIn!",
  },
  {
    alt: "email",
    link: "mailto:oleksii.avdieiev.work@gmail.com",
    image: email,
    text: "Write me an email!",
  },
  {
    alt: "resume",
    link: pdf,
    image: file,
    text: "Download my resume!",
  },
];
