import React from "react";
import PropTypes from "prop-types";
import Avatar from "./Avatar";

const Name = props => {
  return (
    <div>
      <Avatar />
      <div className="name transition">{props.name}</div>
    </div>
  );
};

Name.propTypes = {
  name: PropTypes.string.isRequired
};

export default Name;
