import React from 'react';
import './App.css';
import MenuBar from './components/menu.bar';
import ScrollUpButton from './components/scrollUp.button';
import SocialMediaRibbon from './components/socialMedia.ribbon';
import ConfigRow from './components/config.row';
import favicon from './assets/favicon.png';

function App() {
  return (
  <React.StrictMode>
  <div className="App">
    <header className="App-header">
    <ConfigRow />
    <MenuBar />
    <SocialMediaRibbon />
    <ScrollUpButton />
    </header>
  </div>
  </React.StrictMode>
  );
}

export default App;
