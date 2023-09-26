import React from 'react';

const ProjectModal = ({ project, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>{project.project_title}</h2>
                <div className='modal-top'>
                    <div className="image-container">
                        <img src={project.image_link} alt={project.project_title} className='responsive-image' />
                    </div>
                    <div className='tech-container'>
                        <div className='modal-description'>
                            <p>
                                <h3>Description</h3>
                                {project.project_description}
                            </p>
                        </div>
                        <div className='modal-techs'>
                            <h3>Techs</h3>
                            <div className='tech-items'>
                                {project.tech.map((tech, index) => (
                                    <img
                                        key={index}
                                        src={require(`../images/stack/${tech}.png`)} // Replace with the actual path to your tech images
                                        alt={tech}
                                        className='tech-icon'
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='modal-buttons'>
                    <button className="close-modal-button button-1" onClick={onClose}>
                        Close
                    </button>
                    <a href={`${project.application_link}`} target='_blank' className='certificates'>
                        <button className='button-1 button-2'>
                            <b>Live Website</b>
                        </button>
                    </a>

                </div>

            </div>
        </div>
    );
};

export default ProjectModal;
