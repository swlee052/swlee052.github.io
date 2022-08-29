import React from 'react';
import './App.css';
import DarkModeSwitch from './components/darkmode/DarkMode';
import NavBar from './components/navbar/NavBar';
import ScrollUpButton from './components/ScrollUpButton';

function App() {
  return (
  <React.StrictMode>
    {/* <LanguageSpeedDial /> */}
    <DarkModeSwitch />
    <NavBar />
    <ScrollUpButton />
  </React.StrictMode>
  );
}

export default App;