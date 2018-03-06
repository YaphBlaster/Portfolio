import React from "react";
import ProjectItem from "./ProjectItem";
import PropTypes from "prop-types";

const ProjectItems = props => {
  return (
    <div className="projects">
      Projects
      {props.projects.map((project, index) => {
        return (
          <ProjectItem
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            github={project.github}
            demo={project.demo}
          />
        );
      })}
    </div>
  );
};

ProjectItem.propTypes = {
  projects: PropTypes.array.isRequired
};

export default ProjectItems;
