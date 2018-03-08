import React from "react";
import PropTypes from "prop-types";
import { Card, Image } from "semantic-ui-react";

const ProjectItem = props => {
  return (
    <Card color="teal" fluid>
      <div className="project-item">
        <Image src={props.image} className="project-image" />
        <div className="spacer" />
        <div>
          <Card.Content>
            <Card.Header className="project-title">{props.title}</Card.Header>
          </Card.Content>
          <Card.Content className="project-description">
            <Card.Description>{props.description}</Card.Description>
          </Card.Content>
          <Card.Description className="project-links">
            <a href="" className="project-git">
              {props.github}
            </a>
            <a href={props.demo} className="project-demo">
              Explore
            </a>
          </Card.Description>

          <Card.Content extra className="project-tech-stack">
            {props.techStack.map((tech, index) => {
              return (
                <span key={index} className="tech">
                  {tech}
                </span>
              );
            })}
          </Card.Content>
        </div>
        <div className="spacer" />
      </div>
    </Card>
  );
};

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.array.isRequired,
  github: PropTypes.string,
  demo: PropTypes.string,
  year: PropTypes.number.isRequired,
  image: PropTypes.string
};

export default ProjectItem;
