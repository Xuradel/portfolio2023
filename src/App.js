// App.js
import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Hero from './components/Hero';
import Nav from './components/Nav';
// import PreLoader from './components/PreLoader';
import Projects from './components/Projects';
import Services from './components/Services';
import ProjectDetail from './components/ProjectDetails';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
          {selectedProject && (
            <ProjectDetail project={selectedProject} />
          )}
          <Contact></Contact>
          <Footer></Footer>
        </main>
      </body>
    </>
  );
}

export default App;
