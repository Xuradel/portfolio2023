// Projects.js
import React, { useState, useEffect } from 'react';
import data from '../data/projects.json';
import ProjectDetail from './ProjectDetails';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    useEffect(() => {
        AOS.init({ duration: 300 })
    }, [])
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
            </div>
        ));
    };

    return (
        <div className='projects-section' id='projects-section'>
            <h2
                data-aos="fade-up"
                data-aos-duration="1000">My work</h2>
            <div className="parent"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                {renderProjects()}
            </div>
            {selectedProject && (
                <ProjectDetail project={selectedProject} onClose={handleCloseProjectDetail} />
            )}
        </div>
    );
};

export default Projects;
