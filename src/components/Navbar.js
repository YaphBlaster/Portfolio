import React from "react";
import animateScrollTo from "animated-scroll-to";

const scrollTo = query => {
  animateScrollTo(document.querySelector(query));
};

const Navbar = () => {
  return (
    <nav className="navbar transition">
      <a href="/#" onClick={() => scrollTo(".home")}>
        Home
      </a>
      <a href="#portfolio" onClick={() => scrollTo(".projects")}>
        Portfolio
      </a>
      <a href="#contact" onClick={() => scrollTo(".contact")}>
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
