import React from "react";
import PropTypes from "prop-types";
import avatar from "../assets/avatar.svg";

const Name = props => {
  return (
    <div>
      <img className="avatar transition" src={avatar} alt="" />
      <div className="name transition">{props.name}</div>
    </div>
  );
};

Name.propTypes = {
  name: PropTypes.string.isRequired
};

export default Name;
