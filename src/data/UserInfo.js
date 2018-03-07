import prequelMemesIcon from "../images/PrequelMemes.png";
import wowVrIcon from "../images/WowVr.jpg";
import CSHOFIcon from "../images/CSHOF.jpg";
import patioBuilder from "../images/PatioBuilder.jpg";
import garageBuilder from "../images/GarageBuilder.jpg";

const resumeLink = "https://goo.gl/Pz49Z9";
const firstName = "Yaphet";
const lastName = "Abraha";
// const summary =
//   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const summary =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
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
    title: "WowVr",
    description:
      "Developed in Unity, this app allows users to create their dream patio on their mobile iOS or Android device and look around there patio using GoogleVR. Users place their products from a bird's eye view, and set up the patio just the way they want, and then they can go to explore view or VR view to look around the patio in a first person perspective. Both modes will use VR to allow you to look around, but GoogleVR allows you to place it in a Cardboard device to actually get the full experience.",
    techStack: ["C#", "Unity", "GoogleVr"],
    github: null,
    demo: "https://goo.gl/Bi6SAZ",
    year: 2016,
    image: wowVrIcon
  },
  {
    title: "Prequel Memes",
    description:
      "A web application developed in React. This application was made to streamline the process of creating images for social media. The user can choose a character and will be given multiple screenshots that are pulled from a server where that character is featured. The user can then choose to add text and then finally create an image with their text implanted onto it.",
    techStack: ["ReactJS", "Javascript", "HTML5", "CSS3"],
    github: null,
    demo: "www.prequelmemes.com",
    year: 2018,
    image: prequelMemesIcon
  },
  {
    title: "Canadian Sports Hall of Fame Induction Vr Invitation",
    description:
      "This app was created to invite members to the Canadian Sports Hall of Fame induction for 2016 using Google Cardboard/VR. This app would have users turn on their devices and find themselves in a full auditorium where they would be invited by a video playing to come to the event.",
    techStack: ["C#", "Unity", "GoogleVr"],
    github: null,
    demo: null,
    year: 2016,
    image: CSHOFIcon
  },
  {
    title: "Canada’s Dream Garage Builder",
    description:
      "Developed in Unity, this app allows a user to create their own virtual garage in a Canadian Tire store using a 85 inch 4K touch screen TV and a Oculus Rift. Users create their garage in a controlled first person experience that allows you to move products around, then can explore their space by moving around using the touch screen, or putting on the Oculus Rift to see it in Virtual Reality.",
    techStack: ["C#", "Unity"],
    github: null,
    demo: null,
    year: 2015,
    image: garageBuilder
  },
  {
    title: "Canada’s Dream Patio Builder",
    description:
      "Located in the Edmonton Canadian Tire flagship store, and developed in Unity, this is an app that connects an 85 inch 4K touch screen with an Oculus Rift to create an awesome patio creation experience. Users can create a patio through a top down builder on the touch screen and switch to first person explore mode and examine their creation. Share mode allows them to either share their creation there friends, or email themselves a shopping list that contains all of the items right down to the isle the item can be found in.",
    techStack: ["C#", "Unity"],
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
  links
};

export default Data;
