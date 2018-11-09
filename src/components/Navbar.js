import React from "react";
import animateScrollTo from "animated-scroll-to";
import data from "../data/UserInfo";

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

const isMobileDevice = () => {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
};

const Navbar = () => {
  const usingMobile = isMobileDevice();
  return (
    <nav className="navbar transition home">
      <a
        className={usingMobile && "mobile-link"}
        href={data.resumeLink}
        target="_blank"
      >
        Resume
      </a>
      <span
        className={usingMobile && "mobile-link"}
        onClick={() => scrollTo(".projects")}
      >
        Projects
      </span>
      <a
        className={usingMobile && "mobile-link"}
        onClick={() => scrollTo(".contact")}
      >
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
