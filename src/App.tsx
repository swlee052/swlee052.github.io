import React from 'react';
import './App.css';
import ScrollUpButton from './components/buttons/scroll-up-button';
import NavBar from './components/buttons/navbar';
import DarkMode from './components/darkmode/darkmode';
import Content from './components/content/content';

function App() {
  return (
  <React.StrictMode>
    <DarkMode />
    <NavBar />
    <Content />
    <ScrollUpButton />
  </React.StrictMode>
  );
}

export default App;