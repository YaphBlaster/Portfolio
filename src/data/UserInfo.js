const firstName = "Yaphet";
const lastName = "Abraha";
const summary = "I make websites";
const emailAddress = "yaphet.abraha@gmail.com";
const linkedIn = "https://www.linkedin.com/in/yaphet-abraha-95193490/";
const github = "https://github.com/YaphBlaster";
const skillsList = [
  "ReactJS",
  "Javascript",
  "HTML5",
  "CSS3",
  "C#",
  "Unity",
  "Unreal Engine"
];
const about = [
  {
    category: "contactInfo",
    info: [
      `<a href="mailto:${emailAddress}">${emailAddress}</a>`,
      `<a href="${linkedIn}">LinkedIn</a>`,
      `<a href="${github}">GitHub</a>`
    ]
  },
  {
    category: "resume",
    info: "yaphetabraha.pdf"
  },
  {
    category: "education",
    info: "B.Sc. Computer Science - University of Winnipeg"
  },
  {
    category: "skills",
    info: skillsList
  }
];

const Data = {
  firstName,
  lastName,
  summary,
  about
};

export default Data;
