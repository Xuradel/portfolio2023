import React, {useEffect} from 'react';
import AOS from 'aos';

const ProjectCard = ({ project, onClick }) => {

    useEffect(() => {
        AOS.init({ duration: 300 })
    }, [])


  return (
    <div className='project-card' onClick={onClick} data-aos="fade-up"
    data-aos-duration="1000">
      <div className='project-card-image'>
        <img src={project.image_link} alt={project.project_title} />
      </div>
      <div className='project-card-text'>
        <h3>{project.project_title}</h3>
      </div>
    </div>
  );
}

export default ProjectCard;
