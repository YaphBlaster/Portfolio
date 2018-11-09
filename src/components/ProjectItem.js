import React from "react";
import PropTypes from "prop-types";

const ProjectItem = props => {
  return (
    <div className="project-item">
      <div className="project-image-container">
        <img src={props.image} className="project-image" alt="" />
      </div>
      <div className="spacer" />
      <div>
        <div className="project-title ">{props.title}</div>
        <div className="project-description">{props.description}</div>
        <div className="project-links-container">
          {props.demo && (
            <div className="project-links">
              <a href={props.demo} target="_blank">
                {props.demoText}
              </a>
            </div>
          )}

          {props.github && (
            <div className="project-links">
              <a href={props.github} target="_blank">
                View Github
              </a>
            </div>
          )}
        </div>

        <div className="project-tech-stack">
          {props.techStack.map((tech, index) => {
            return (
              <span key={index} className="tech">
                {tech}
              </span>
            );
          })}
        </div>
      </div>
      <div className="spacer" />
    </div>
  );
};

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.array.isRequired,
  github: PropTypes.string,
  demo: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  demoText: PropTypes.string,
  year: PropTypes.number.isRequired,
  image: PropTypes.string
};

export default ProjectItem;
