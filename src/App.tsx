import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBarRibbon from './components/menuBar.ribbon';
import ScrollUpButton from './components/scrollUp.button';
import SocialMediaRibbon from './components/socialMedia.ribbon';
import ConfigRow from './components/config.row';

function App() {
  return (
    <React.StrictMode>
    <ConfigRow/>
    <MenuBarRibbon/>
    <SocialMediaRibbon/>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <ScrollUpButton/>
    </React.StrictMode>
  );
}

export default App;
