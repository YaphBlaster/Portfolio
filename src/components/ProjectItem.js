import React from "react";
import PropTypes from "prop-types";

const createMarkup = input => {
  if (Array.isArray(input)) {
    let returnString;
    let count = 0;
    input.forEach(element => {
      if (count !== 0) {
        returnString += ` ${element}`;
      } else {
        returnString = `${element}`;
      }
      count++;
    });
    return { __html: `${returnString}` };
  } else {
    return { __html: input };
  }
};

const ProjectItem = props => {
  return (
    <div className="project-item ">
      <div className="project-image-container">
        <img src={props.image} className="project-image" alt="" />
      </div>
      <div className="spacer" />
      <div>
        <div className="project-title ">{props.title}</div>
        <div className="project-description">{props.description}</div>
        <div className="project-links-container">
          <div
            className="project-links"
            dangerouslySetInnerHTML={createMarkup(props.demo)}
          />
          <div
            className="project-links"
            dangerouslySetInnerHTML={createMarkup(props.github)}
          />
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
  year: PropTypes.number.isRequired,
  image: PropTypes.string
};

export default ProjectItem;
