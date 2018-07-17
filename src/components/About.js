import React from "react";
import PropTypes from "prop-types";

const createMarkup = input => {
  if (Array.isArray(input)) {
    let returnString;
    let count = 0;
    input.forEach(element => {
      if (count !== 0) {
        returnString += `, "${element}"`;
      } else {
        returnString = `"${element}"`;
      }
      count++;
    });
    return { __html: `[${returnString}]` };
  } else {
    return { __html: `"${input}"` };
  }
};

const About = props => {
  const about = props.about.map((field, index) => {
    return (
      <div key={index}>
        <div className="category">{`> ${props.prefix.toLowerCase()}.${
          field.category
        }`}</div>
        <div
          className="info"
          dangerouslySetInnerHTML={createMarkup(field.info)}
        />
      </div>
    );
  });
  return (
    <div className="terminal">
      <div id="bar">
        <div id="bar-red" />
        <div id="bar-yellow" />
        <div id="bar-green" />
      </div>
      <div id="screen" className="about transition">
        {about}
        <div>
          <div className="category">
            {" "}
            > <div className="cursor" />
          </div>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {
  about: PropTypes.arrayOf(Object).isRequired,
  prefix: PropTypes.string.isRequired
};

export default About;
