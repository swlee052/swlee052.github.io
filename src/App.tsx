import React from 'react';
import './App.css';
// import MenuSideBar from './components/menu.sidebar';
import ScrollUpButton from './components/scrollUp.button';
import SocialMediaNavBar from './components/socialMedia.navBar';
import ConfigRow from './components/config.row';
import MenuButton from './components/menu.button';

function App() {
  return (
  <React.StrictMode>
  <div className="App" id="outer-container">
    <header className="App-header">
      <MenuButton />
      <ConfigRow />
      {/* <MenuSideBar /> */}
      <SocialMediaNavBar />
      <ScrollUpButton />
    </header>
  </div>
  </React.StrictMode>
  );
}

export default App;
