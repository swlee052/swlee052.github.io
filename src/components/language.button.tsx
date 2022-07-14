import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import styled from 'styled-components';

function LanguageButton() {
  return (
    <div>
      <img src="https://img.icons8.com/doodle/96/000000/translate-app.png" alt="translate"/>
    </div>
  );
}

function KoreanIcon() {
  return (
    <img src="https://img.icons8.com/color/48/000000/south-korea-circular.png"/>
  );
}

function EnglishIcon() {
  return (
    <img src="https://img.icons8.com/color/48/000000/great-britain-circular.png"/>
  );
}

const actions = [
  { icon: <EnglishIcon />, name: 'English' },
  { icon: <KoreanIcon />, name: 'Korean' },
];

export default function LanguageSpeedDial() {
  return (
    <Box sx={{ position: 'fixed', margin: 'auto', top: 16, right: 16, width: 96, height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="Language Button Speed Dial"
        sx={{ position: 'absolute', top: 16, right: 16 }}
        icon={<LanguageButton />}
        direction='down'
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            tooltipTitle={action.name}
            icon={action.icon}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
