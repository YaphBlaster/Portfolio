const firstName = "Yaphet";
const lastName = "Abraha";
const summary =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const emailAddress = "yaphet.abraha@gmail.com";
const linkedIn = "https://www.linkedin.com/in/yaphet-abraha-95193490/";
const github = "https://github.com/YaphBlaster";
const resume = "./resume.pdf";
const skillsList = [
  "ReactJS",
  "Javascript",
  "HTML5",
  "CSS3",
  "C#",
  "Unity",
  "Unreal Engine"
];
const education = "B.Sc. Computer Science - University of Winnipeg";

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
    info: `<a href="${resume}" target="_blank">resume.pdf</a>`
  },
  {
    category: "education",
    info: education
  },
  {
    category: "skills",
    info: skillsList
  }
];

const links = about[0].info;

const Data = {
  firstName,
  lastName,
  summary,
  about,
  links
};

export default Data;
