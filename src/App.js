import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Nav from './components/Nav';
import PreLoader from './components/PreLoader';

function App() {
  return (
    <>
      {/* <PreLoader></PreLoader> */}
      <Nav></Nav>
      <body>
        <main>
          <Hero></Hero>
          <About></About>
        </main>
      </body>

    </>
  );
}

export default App;
