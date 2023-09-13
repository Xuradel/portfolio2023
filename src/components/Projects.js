import React from 'react';
import data from '../data/projects.json';

const Projects = () => {
    const renderProjects = () => {
        return data.projects.map((project, index) => (
            <div key={index} className={`div${index + 1}`}>
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
        </div>
    );
}

export default Projects;
