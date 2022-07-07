import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DarkModeSwitch from './components/darkMode.switch';
import SocialMediaRibbon from './components/socialMedia.ribbon';
import MenuBarRibbon from './components/menuBar.ribbon';
import ScrollUpButton from './components/scrollUp.button';
import TranslateButton from './components/translate.button';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <DarkModeSwitch/>
    <MenuBarRibbon/>
    <SocialMediaRibbon/>
    <TranslateButton/>
    <App />
    <ScrollUpButton/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//https://www.freecodecamp.org/news/portfolio-app-using-react-618814e35843/
