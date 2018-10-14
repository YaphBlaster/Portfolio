import React from "react";
import ProjectItem from "./ProjectItem";
import PropTypes from "prop-types";

const ProjectContainer = props => {
  props.projects.sort(function(a, b) {
    return b.year - a.year;
  });
  return (
    <div className="projects center">
      <p className="projects-text">Projects</p>

      <div className="project-container">
        {props.projects.map((project, index) => {
          return (
            <ProjectItem
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              github={project.github}
              demo={project.demo}
              demoText={project.demoText}
              year={project.year}
              image={project.image}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

ProjectContainer.propTypes = {
  projects: PropTypes.array.isRequired
};

export default ProjectContainer;
