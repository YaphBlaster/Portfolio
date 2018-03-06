import React from "react";
import PropTypes from "prop-types";

const ProjectItem = props => {
  return (
    <div className="project-item">
      <div className="project-title">{props.title}</div>
      <div className="project-description">{props.description}</div>
      <div className="project-tech-stack">{props.techStack}</div>
      <div className="project-links">
        <a href="" className="project-git">
          {props.github}
        </a>
        <a href="" className="project-demo">
          {props.demo}
        </a>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.array.isRequired,
  github: PropTypes.string,
  demo: PropTypes.string
};

export default ProjectItem;
