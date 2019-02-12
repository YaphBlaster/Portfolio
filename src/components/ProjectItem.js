import React from "react";
import PropTypes from "prop-types";

const ProjectItem = props => {
  console.log(props);
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
          <div className="project-links">
            {props.demo && (
              <a href={props.demo} target="_blank">
                {props.demoText}
              </a>
            )}

            {props.github instanceof Array ? (
              props.github.map((githubURL, index) => (
                <a href={githubURL} target="_blank" key={index}>
                  {props.gitText ? props.gitText[index] : "View Github"}
                </a>
              ))
            ) : (
              <a href={props.github} target="_blank">
                View Github
              </a>
            )}
          </div>
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
  github: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  gitText: PropTypes.array,
  demo: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  demoText: PropTypes.string,
  year: PropTypes.number.isRequired,
  image: PropTypes.string
};

export default ProjectItem;
