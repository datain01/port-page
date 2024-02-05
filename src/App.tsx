import { useState, useEffect } from 'react';
import './App.css';
import Head from './components/Head';
import NavBar from './components/NavBar';
import About from './components/About';
import Project from './components/Project';
import TimelineList from './components/TimelineList';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    document.body.className = darkMode ? 'bg-dark text-white' : 'bg-light text-dark';
  }, [darkMode])

  return (
    <>
      <div className={`app ${darkMode ? 'bg-dark' : 'bg-light'}`}>
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Head darkMode={darkMode} />
        <div id='about'>
        <About darkMode={darkMode} />
        </div>
        <div id='project'>
        <Project darkMode={darkMode} />
        </div>
        <div id='education'>
        <TimelineList darkMode={darkMode}/>
        </div>
        <div id='contact'>
        <Contact darkMode={darkMode} />
        </div>
        <Footer darkMode={darkMode} />
      </div>
    </>
  );
}

export default App;
