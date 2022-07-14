import React from "react";
import styled from "styled-components";
import { DarkModeSwitch } from "./darkMode.switch";
import LanguageSpeedDial from "./language.button";

const ConfigGroup = styled.div`
  z-index: 0;
`

export default function ConfigRow() {
  return (
    <ConfigGroup className='config-row'>
      <DarkModeSwitch />
      <LanguageSpeedDial />
    </ConfigGroup>
  );
}
