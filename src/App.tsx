import React, { useState, useEffect } from 'react';
import './App.css';
import Head from './components/Head';
import NavBar from './components/NavBar';
import About from './components/About';
import Project from './components/Project';
import TimelineList from './components/TimelineList';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // 다크 모드가 변경될 때마다 body의 클래스를 업데이트합니다.
  useEffect(() => {
    document.body.className = darkMode ? 'bg-dark text-white' : 'bg-light text-dark';
  }, [darkMode])

  return (
    <>
      <div className={`app ${darkMode ? 'bg-dark' : 'bg-light'}`}>
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Head darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Project darkMode={darkMode} />
        <TimelineList darkMode={darkMode}/>
      </div>
    </>
  );
}

export default App;
