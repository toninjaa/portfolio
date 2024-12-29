import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Bubble from './Bubble';

export default function Projects() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuClick() {
    setMenuOpen(!menuOpen);
  }

  return (
    <Button
      sx={!menuOpen ? {
        border: '2px solid #00D27C',
        borderRadius: '4',
        marginTop: '5vh',
      } : {}}
      onClick={handleMenuClick}>

      {!menuOpen &&
        <Typography color='primary.dark' variant="h3">
          Projects
        </Typography>
      }

      <Menu
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        open={menuOpen}
        sx={{
          '& .MuiPaper-root': {
            background: 'none',
            boxShadow: 'none',
          },
          marginTop: '8px'
        }}
        transformOrigin={{ vertical: 'top', horizontal: "center" }}
      >
        <Stack direction='row'>
          <Bubble link="https://toninjaa.github.io/weather-app/" title='Weather Widget' />

          <Bubble link="https://toninjaa.github.io/palindrome-site/" title='Palindrome Detector' />

          <Bubble link="https://rubygems.org/profiles/toninjaa" title='Ruby Gems' />
        </Stack>
      </Menu>
    </Button>
  )
}