import React from "react";
import animateScrollTo from "animated-scroll-to";
import data from "../data/UserInfo";

// default options
const options = {
  // duration of the scroll per 1000px, default 500
  speed: 500,

  // minimum duration of the scroll
  minDuration: 300,

  // maximum duration of the scroll
  maxDuration: 300
};

const scrollTo = query => {
  animateScrollTo(document.querySelector(query), options);
};

const Navbar = () => {
  return (
    <nav className="navbar transition">
      <a className="navbar-link" href={data.resumeLink} target="_blank">
        Resume
      </a>
      <span className="navbar-link" onClick={() => scrollTo(".projects")}>
        Projects
      </span>
      <a className="navbar-link" onClick={() => scrollTo(".contact")}>
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
