import prequelMemesIcon from "../images/PrequelMemes.png";
import wowVrIcon from "../images/WowVr.jpg";
import CSHOFIcon from "../images/CSHOF.jpg";
import patioBuilder from "../images/PatioBuilder.jpg";
import garageBuilder from "../images/GarageBuilder.jpg";

const resumeLink = "./resume.pdf";
const firstName = "Yaphet";
const lastName = "Abraha";
const summary =
  "I am a software engineer in Winnipeg, MB. I've developed on various platforms ranging from web applications using React and Javascript to virtual reality using Unity and Unreal Engine. I love working on projects that challenge me and help me grow to become a better programmer. Thanks for visiting my page and have a look at my projects down below!  ";
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
    techStack: ["C#", "Unity", "GoogleVr"],
    github: null,
    demo: [
      `<a href="https://play.google.com/store/apps/details?id=com.canadiantire.wowvr" target="_blank">Android</a>`,
      `<a href=" https://itunes.apple.com/ca/app/wow-vr/id1090212996?mt=8" target="_blank">Ios</a>`
    ],
    year: 2016,
    image: wowVrIcon
  },
  {
    title: "Prequel Memes",
    description:
      "A web application developed in React. This application was made to streamline the process of creating images for social media. The user can choose a character and will be given multiple screenshots that are pulled from a server where that character is featured. The user can then choose to add text and then finally create an image with their text implanted onto it.",
    techStack: ["ReactJS", "Javascript"],
    github: null,
    demo: `<a class="test" href="http://www.prequelmemes.com" target="_blank">View Link</a>`,
    year: 2018,
    image: prequelMemesIcon
  },
  {
    title: "Canadian Sports Hall of Fame Induction Vr Invitation",
    description:
      "This app was created to invite members to the Canadian Sports Hall of Fame induction for 2016 using Google Cardboard/VR. Upon putting a device in a vr headset, users find themselves in a full auditorium where they would be invited to the sports event via a video playing on a theatre screen",
    techStack: ["C#", "Unity", "GoogleVr"],
    github: null,
    demo: null,
    year: 2016,
    image: CSHOFIcon
  },
  {
    title: "Canada’s Dream Garage Builder",
    description:
      "Developed in Unity, this app allows a users to create their garage in a controlled first person experience that allows you to move products around. Users can then can explore their space by moving around using the touch screen, or putting on an Oculus Rift to see it in Virtual Reality.",
    techStack: ["C#", "Unity", "Oculus"],
    github: null,
    demo: null,
    year: 2015,
    image: garageBuilder
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
