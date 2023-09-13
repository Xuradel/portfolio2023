import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Nav from './components/Nav';
import PreLoader from './components/PreLoader';
import Projects from './components/Projects';
import Services from './components/Services';

function App() {
  return (
    <>
      {/* <PreLoader></PreLoader> */}
      <Nav></Nav>
      <body>
        <main>
          <Hero></Hero>
          <About></About>
          <Services></Services>
          <Projects></Projects>
        </main>
      </body>

    </>
  );
}

export default App;
