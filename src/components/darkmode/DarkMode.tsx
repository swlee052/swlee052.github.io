import './DarkMode.css'
import React from "react";

function setTheme(darkMode: boolean) {
  const mode: string = darkMode ? "dark" : "light";
  localStorage.setItem("theme", mode);
  document.documentElement.setAttribute("data-theme", mode);
};

const prefersDarkMode = window.matchMedia 
&& window.matchMedia("(prefers-color-scheme: dark)").matches;
const storedTheme = localStorage.getItem("theme");
const defaultDark = storedTheme === "dark" || prefersDarkMode;

function DarkModeSwitch() {
  const [darkMode, setDarkMode] = React.useState(defaultDark ? true : false);
  setTheme(darkMode);
  function handleClick(){
    setDarkMode((current) => !current);
    setTheme(darkMode);
  }
  return (
    <div className="toggle-theme-wrapper">
      <span>☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={handleClick}
          checked={darkMode}
        />
        <div className="slider round"></div>
      </label>
      <span>🌒</span>
    </div>
  );
};

export default DarkModeSwitch;