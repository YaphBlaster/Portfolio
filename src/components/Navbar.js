import React from "react";
import animateScrollTo from "animated-scroll-to";
<<<<<<< HEAD
import data from "../data/UserInfo";
=======
import user from "../data/UserInfo";
>>>>>>> 0745daee26a12bb6dff6de7b5abec01157b534eb

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
<<<<<<< HEAD
      <a className="navbar-link" href={data.resumeLink} target="_blank">
=======
      <a href={user.resumeLink} target="_blank">
>>>>>>> 0745daee26a12bb6dff6de7b5abec01157b534eb
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
