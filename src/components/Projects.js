// Projects.js
import React, { useState } from 'react';
import data from '../data/projects.json';
import ProjectDetail from './ProjectDetails';
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseProjectDetail = () => {
    setSelectedProject(null);
  };

  const renderProjects = () => {
    return data.projects.map((project, index) => (
      <div
        key={index}
        className={`div${index + 1}`}
        onClick={() => handleProjectClick(project)} // Call handleProjectClick when clicked
      >
        <img src={project.image_link} alt={`Project ${index + 1}`} />
        <h3 className="project-title">{project.project_title}</h3>
        <p className="project-description">{project.project_description}</p>
      </div>
    ));
  };

  return (
    <div className='projects-section'>
      <h2>My work</h2>
      <div className="parent">
        {renderProjects()}
      </div>
      {selectedProject && (
        <ProjectDetail project={selectedProject} onClose={handleCloseProjectDetail} />
      )}
    </div>
  );
};

export default Projects;
