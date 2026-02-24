import * as React from 'react';

import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import BottomNavigation from '@mui/material/BottomNavigation';


export default function BotaoNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction></BottomNavigationAction>                           
      <BottomNavigationAction
        label="Vespertino"
        value="recentes"        
      />
      <BottomNavigationAction
        label="Noturno"
        value="nearby"        
      />
      <BottomNavigationAction
       label="Integral" 
       value="folder" />
    </BottomNavigation>
  );
}
