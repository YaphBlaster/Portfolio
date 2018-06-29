import React from "react";
import PropTypes from "prop-types";

const createMarkup = (input, isMobile) => {
  let parsedInput = input;
  if (isMobile) {
    parsedInput = input.replace("placeholder", "mobile-link");
  }
  return { __html: `${parsedInput}` };
};

const isMobileDevice = () => {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
};

const Contact = props => {
  const usingMobile = isMobileDevice();
  const links = props.links.map((link, index) => {
    return (
      <div key={index}>
        <span dangerouslySetInnerHTML={createMarkup(link, usingMobile)} />
      </div>
    );
  });
  return (
    <div className="contact transition">
      <div className="contact-me">Contact Me</div>
      <div className="contact-link-container">{links}</div>
    </div>
  );
};

Contact.propTypes = {
  links: PropTypes.array.isRequired
};

export default Contact;
