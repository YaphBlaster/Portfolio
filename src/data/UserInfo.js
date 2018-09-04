import prequelMemes from "../images/PrequelMemes.png";
import wowVr from "../images/WowVr.jpg";
import CSHOF from "../images/CSHOF.jpg";
import patioBuilder from "../images/PatioBuilder.jpg";
import garageBuilder from "../images/GarageBuilder.jpg";
import beeline from "../images/Beeline.jpg";
import portfolio from "../assets/avatar.svg";

const resumeLink = "./resume.pdf";
const firstName = "Yaphet";
const lastName = "Abraha";
const summary = `I am a software engineer in Winnipeg, Manitoba. 
  I've developed on various platforms ranging from web applications using React and JavaScript to virtual reality using Unity and Unreal Engine. 
  I love working on projects that challenge and help me grow to become a better programmer. 
  Thanks for visiting my portfolio and please check out my projects down below!`;
const emailAddress = "yaphet.abraha@gmail.com";
const linkedIn = "https://www.linkedin.com/in/yaphet-abraha-95193490";
const github = "https://github.com/YaphBlaster";
const skillsList = [
  "ReactJS",
  "React Native",
  "Redux",
  "JavaScript",
  "Enzyme",
  "Mocha",
  "Chai",
  "Jest",
  "HTML5",
  "CSS3",
  "Sass",
  "C#",
  "Python",
  "Unity",
  "Unreal Engine",
  "Oculus",
  "HTC Vive",
  "Android",
  "IOS"
];
const education = "B.Sc. Computer Science - University of Winnipeg";

const about = [
  {
    category: "contactInfo",
    info: [
      `<a class="placeholder" href="mailto:${emailAddress}">${emailAddress}</a>`,
      `<a class="placeholder" target="_blank" href="${linkedIn}">LinkedIn</a>`,
      `<a class="placeholder" target="_blank" href="${github}">GitHub</a>`
    ]
  },
  {
    category: "resume",
    info: `<a href="${resumeLink}" target="_blank">resume.pdf</a>`
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

const projects = [
  {
    title: "CT WOW Guide Virtual Reality App",
    description:
      "WOWVR is a fun and creative tool that allows you to design your dream patio with Outdoor living products in a fully 3D environment. With over 100+ high definition products to choose from including BBQs, Seating, Tables, Rugs, Accessories, Umbrellas and Gazebos, you can arrange them into ANY possible way that fits your Outdoor lifestyle. Want to see your design up-close? Using WOWVR’s built-in Virtual Reality engine, you can take a virtual walk through your patio designs in a fully immersive 3D environment. WOWVR also supports Google Cardboard viewers, so you can get a Fully Immersive VR Experience using your mobile device.",
    techStack: ["C#", "Unity", "GoogleVr", "Android", "IOS"],
    github: null,
    demo: `<a href="https://play.google.com/store/apps/details?id=com.canadiantire.wowvr&hl=en_CA" target="_blank">Download for Android</a>`,
    year: 2016,
    image: wowVr
  },
  {
    title: "Portfolio",
    description:
      "This website! I wanted some more experience working with ReactJS, Sass, and web in general so I decided a portfolio page would be a great learning experience! Feel free to view the github repository linked below.",
    techStack: [
      "ReactJS",
      "Javascript",
      "Sass",
      "Enzyme",
      "Mocha",
      "Chai",
      "HTML5",
      "CSS3"
    ],
    github: `<a href="https://github.com/YaphBlaster/Portfolio" target="_blank">View Github</a>`,
    demo: null,
    year: 2018,
    image: portfolio
  },
  {
    title: "Prequel Memes",
    description:
      "A web application developed in React. This application was made to streamline the process of creating images for social media. The user can choose a character and will be given multiple screenshots that are pulled from a server where that character is featured. The user can then choose to add text and then finally create an image with their text implanted onto it.",
    techStack: ["ReactJS", "Redux", "Sass", "Javascript", "HTML5", "CSS3"],
    github: `<a href="https://github.com/YaphBlaster/pm3" target="_blank">View Github</a>`,
    demo: `<a href="http://www.prequelmemes.com" target="_blank">View Website</a>`,
    year: 2018,
    image: prequelMemes
  },
  {
    title: "Canadian Sports Hall of Fame Induction Vr Invitation",
    description:
      "This app was created to invite members to the 2016 Canadian Sports Hall of Fame induction using Google Cardboard/VR. Upon putting a device in a vr headset, users find themselves in a full auditorium where they would be invited to the sports event via a video playing on a theatre screen",
    techStack: ["C#", "Unity", "GoogleVr"],
    github: null,
    demo: null,
    year: 2016,
    image: CSHOF
  },
  {
    title: "Canada’s Dream Garage Builder",
    description:
      "Developed in Unity, this app allows a user to create their garage in a controlled first person experience and allows them to move products around. Users can then can explore their space by moving around using a touch screen, or by putting on an Oculus Rift to see their garage in Virtual Reality.",
    techStack: ["C#", "Unity", "Oculus"],
    github: null,
    demo: null,
    year: 2015,
    image: garageBuilder
  },
  {
    title: "Beeline",
    description:
      "Developed in React Native, this app allows users to input multiple destinations of interest and will then navigate the user to those destinations via the most efficient route.",
    techStack: ["React Native", "IOS"],
    github: null,
    demo: `<a href="https://itunes.apple.com/us/app/beeline/id1372586745?mt=8" target="_blank">Download for IOS</a>`,
    year: 2018,
    image: beeline
  },
  {
    title: "Canada’s Dream Patio Builder",
    description:
      "Developed in Unity, this application lets users create a patio through a top down builder on the touch screen. Users can then can explore their space by moving around using the touch screen, or putting on an Oculus Rift to see it in Virtual Reality.",
    techStack: ["C#", "Unity", "Oculus"],
    github: null,
    demo: null,
    year: 2016,
    image: patioBuilder
  }
];

const Data = {
  firstName,
  lastName,
  summary,
  about,
  projects,
  links,
  resumeLink
};

export default Data;
