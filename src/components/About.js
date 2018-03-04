// import React from "react";
import React, { Component } from "react";
import PropTypes from "prop-types";

const createMarkup = input => {
  if (Array.isArray(input)) {
    let returnString;
    let count = 0;
    input.forEach(element => {
      if (count !== 0) {
        returnString += ", " + `"` + element + `"`;
      } else {
        returnString = `"` + element + `"`;
      }
      count++;
    });
    return { __html: "[" + returnString + "]" };
  } else {
    return { __html: `"` + input + `"` };
  }
};

const About = props => {
  const about = props.about.map((field, index) => {
    return (
      <div key={index}>
        <div className="category">{`${props.prefix.toLowerCase()}.${
          field.category
        }`}</div>
        <div className="info">
          <div dangerouslySetInnerHTML={createMarkup(field.info)} />
        </div>
      </div>
    );
  });
  return about;
};

About.propTypes = {
  about: PropTypes.arrayOf(Object).isRequired,
  prefix: PropTypes.string.isRequired
};

export default About;
