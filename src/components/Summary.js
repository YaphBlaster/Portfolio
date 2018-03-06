import React from "react";
import PropTypes from "prop-types";

const Summary = props => {
  return <div className="summary transition">{props.summary}</div>;
};

Summary.propTypes = {
  summary: PropTypes.string.isRequired
};

export default Summary;
