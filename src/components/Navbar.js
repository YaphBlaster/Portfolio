import React from "react";
import animateScrollTo from "animated-scroll-to";

const Navbar = () => {
  return (
    <nav className="navbar transition">
      <a
        href="#"
        onClick={() => animateScrollTo(document.querySelector(".home"))}
      >
        Home
      </a>
      <a href="#portfolio">Portfolio</a>
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
