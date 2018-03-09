import React from "react";
import animateScrollTo from "animated-scroll-to";

// default options
const options = {
  // duration of the scroll per 1000px, default 500
  speed: 500,

  // minimum duration of the scroll
  minDuration: 0,

  // maximum duration of the scroll
  maxDuration: 0,

  // DOM element to scroll, default window
  // Pass a reference to a DOM object
  // Example: document.querySelector('#element-to-scroll'),
  element: window,

  // should animated scroll be canceled on user scroll/keypress
  // if set to "false" user input will be disabled until animated scroll is complete
  cancelOnUserAction: true,

  // function that will be executed when the scroll animation is finished
  onComplete: function() {}
};

const scrollTo = query => {
  animateScrollTo(document.querySelector(query), options);
};

const Navbar = () => {
  return (
    <nav className="navbar transition">
      <a href="./resume.pdf" download>
        Resume
      </a>
      <span onClick={() => scrollTo(".projects")}>Projects</span>
      <a onClick={() => scrollTo(".contact")}>Contact</a>
    </nav>
  );
};

export default Navbar;
