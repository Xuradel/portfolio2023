// ProjectDetail.js
import React, { useEffect } from 'react';
import './ProjectDetail.css'; // Import a CSS file for styling animations
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';

const ProjectDetail = ({ project, onClose }) => {
    useEffect(() => {
        AOS.init({ duration: 300 })
    }, [])
    return (
        <div className="project-detail-overlay" data-aos="zoom-in">
            <div className="project-detail-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <div className='detailt-content-image'>
                    <img src={project.image_link} className='content-image' alt='content'></img>
                    <div className='title-background'>
                        <div className='title-background-left'>
                            <h4 className='project-title2'>{project.project_title}</h4>
                        </div>
                        <div className='title-background-right'>
                            {project.github_link !== '' ? <a href={project.github_link} target="_blank">
                                <img src={require('../images/icons8-github-50.png')}></img>
                            </a> : null}
                            <a href={project.application_link} target="_blank">
                                <img src={require('../images/icons8-website-48.png')}></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='project-detail-text'>
                <div className='text-left'>
                    <h4 className='text-titles'>Description</h4>
                    <p className='text-description'>{project.project_description}</p>
                </div>
                <div className='text-right'>
                    <h4 className='text-titles'>Technologies</h4>
                    <div className="tech-images">
                        {project.tech.map((technology, index) => (
                            <img
                                key={index}
                                src={require(`../images/stack/${technology}.png`)}
                                alt={technology}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
