import React from "react";
import PropTypes from "prop-types";

const createMarkup = input => {
  return { __html: `${input}` };
};

const Contact = props => {
  const links = props.links.map((link, index) => {
    return (
      <div key={index}>
        <span
          className="contact-link"
          dangerouslySetInnerHTML={createMarkup(link)}
        />
      </div>
    );
  });
  return (
    <div className="contact transition">
      <div className="contact-me">Contact Me</div>
      <div className="contact-link-container transition">{links}</div>
    </div>
  );
};

Contact.propTypes = {
  links: PropTypes.array.isRequired
};

export default Contact;
