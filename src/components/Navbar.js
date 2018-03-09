import React from "react";
import animateScrollTo from "animated-scroll-to";

const scrollTo = query => {
  animateScrollTo(document.querySelector(query));
};

const Navbar = () => {
  return (
    <nav className="navbar transition">
      <a href="./resume.pdf" target="_blank">
        Resume
      </a>
      <a href="/#" onClick={() => scrollTo(".projects")}>
        Projects
      </a>
      <a href="/#" onClick={() => scrollTo(".contact")}>
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
