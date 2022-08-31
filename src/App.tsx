import React from 'react';
import './App.css';
import DarkMode from './components/DarkMode/DarkMode';
import NavBar from './components/NavBar/NavBar';
import ScrollUpButton from './components/ScrollUpButton';

function App() {
  return (
  <React.StrictMode>
    {/* <LanguageSpeedDial /> */}
    <DarkMode />
    <NavBar />
    <ScrollUpButton />
  </React.StrictMode>
  );
}

export default App;