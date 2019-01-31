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
          const {
            title,
            description,
            techStack,
            github,
            gitText,
            demo,
            demoText,
            year,
            image
          } = project;
          return (
            <ProjectItem
              title={title}
              description={description}
              techStack={techStack}
              github={github}
              gitText={gitText}
              demo={demo}
              demoText={demoText}
              year={year}
              image={image}
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
