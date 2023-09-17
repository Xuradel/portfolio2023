// ProjectDetail.js
import React from 'react';
import './ProjectDetail.css'; // Import a CSS file for styling animations

const ProjectDetail = ({ project, onClose }) => {
  return (
    <div className="project-detail-overlay">
      <div className="project-detail-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>{project.project_title}</h2>
        <p>{project.project_description}</p>
        {/* Add more detailed project information here */}
      </div>
    </div>
  );
};

export default ProjectDetail;
