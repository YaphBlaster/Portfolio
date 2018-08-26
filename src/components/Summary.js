import React from "react";
import PropTypes from "prop-types";

const Summary = props => {
  return <p className="summary transition">{props.summary}</p>;
};

Summary.propTypes = {
  summary: PropTypes.string.isRequired
};

export default Summary;
