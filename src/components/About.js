// import React from "react";
import React, { Component } from "react";
import PropTypes from "prop-types";

const About = props => {
  const about = props.about.map((field, index) => {
    return (
      <div key={index}>
        <div className="category">{`${props.prefix}.${field.category}`}</div>
        <div className="category">{`${props.prefix}.${field.category}`}</div>
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
