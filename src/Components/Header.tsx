import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";

export default function Header() {
  const env = window.location.href.includes("local") ? ".." : "."; 

  return (
    <Paper elevation={3}>
      <AppBar
        color='primary'
        position='fixed'
        sx={{ display: 'block', paddingLeft: '0', '& .MuiToolbar-root': { paddingLeft: '0' } }}
      >
        <Toolbar>
          <Avatar
            alt='Tonia Del Priore'
            src={`${env}/favicon.ico`}
            sx={{ height: 'auto', width: '64px' }}
            variant='square'
          />
          <Typography variant='h4'>
            Hi, I'm Tonia Del Priore
          </Typography>
        </Toolbar>
      </AppBar>
    </Paper>
  )
}