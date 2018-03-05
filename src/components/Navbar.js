import React from "react";
import animateScrollTo from "animated-scroll-to";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a
        href="#home"
        onClick={() => animateScrollTo(document.querySelector(".home"))}
      >
        Home
      </a>
      <a href="#portfolio">portfolio</a>
      <a
        href="#contact"
        onClick={() => animateScrollTo(document.querySelector(".contact"))}
      >
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
