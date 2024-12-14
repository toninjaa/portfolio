import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Bubble from './Bubble';

export default function Projects() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuClick() {
    setMenuOpen(!menuOpen);
  }

  return (
    <Button onClick={handleMenuClick}>
    <Typography variant="h3">Projects</Typography>
      <Menu open={menuOpen}>
        <MenuItem>
          <Bubble link="https://toninjaa.github.io/weather-app/" title='Weather Widget' />
        </MenuItem>

        <MenuItem>
          <Bubble link="https://toninjaa.github.io/palindrome-site/" title='Palindrome Detector' />
        </MenuItem>
      
        <MenuItem>
          <Bubble link="https://rubygems.org/profiles/toninjaa" title='Ruby Gems' />
        </MenuItem>
      </Menu>
    </Button>
  )
}