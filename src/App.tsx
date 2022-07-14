import React from 'react';
import './App.css';
// import MenuSideBar from './components/menu.sidebar';
import ScrollUpButton from './components/scrollUp.button';
import SocialMediaNavBar from './components/socialMedia.navBar';
import ConfigRow from './components/config.row';
import MenuButton from './components/menu.button';
import SideBar from './components/menu.sidebar';

function App() {
  return (
  <React.StrictMode>
  {/* <div className="App" id="outer-container"> */}
    <MenuButton />
    <ConfigRow />
    <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"}/>
    <SocialMediaNavBar />
    <ScrollUpButton />
  {/* </div> */}
  </React.StrictMode>
  );
}

export default App;
