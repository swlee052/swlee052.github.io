import React from "react";
import { DarkModeSwitch } from "./darkMode.switch";
import LanguageSpeedDial from "./language.button";

export default class ConfigRow extends React.Component {
  render(){
    return (
      <div className='config-row'>
        <DarkModeSwitch />
        <LanguageSpeedDial />
      </div>
    );
  }
}
