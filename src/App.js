// App.js
import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Hero from './components/Hero';
import Nav from './components/Nav';
import PreLoader from './components/PreLoader';
import Projects from './components/Projects';
import Services from './components/Services';
import ProjectDetail from './components/ProjectDetails';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <>
      {/* <PreLoader></PreLoader> */}
      <Nav></Nav>
      <body>
        <main>
          <Hero></Hero>
          <About></About>
          <Services></Services>
          <Projects onProjectClick={handleProjectClick}></Projects>
          {/* Render the selected project's detail */}
          {selectedProject && (
            <ProjectDetail project={selectedProject} />
          )}
        </main>
      </body>
    </>
  );
}

export default App;
