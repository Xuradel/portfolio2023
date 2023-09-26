// App.js
import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Hero from './components/Hero';
import Nav from './components/Nav';
// import PreLoader from './components/PreLoader';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectsCarousel from './components/ProjectsCarousel';
import data from './data/projects.json'; // Import your project data
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


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
          <ProjectsCarousel projects={data.projects}></ProjectsCarousel>
          <Contact></Contact>
          <Footer></Footer>
        </main>
      </body>
    </>
  );
}

export default App;
