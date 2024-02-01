// App.tsx
import React, { useState } from 'react';
import './App.css';
import Head from './components/Head';
import NavBar from './components/NavBar';
import About from './components/About';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Head darkMode={darkMode} />
      <About darkMode={darkMode} />
    </>
  );
}

export default App;
