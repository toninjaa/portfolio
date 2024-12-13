import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <Paper elevation={3}>
      <AppBar color='primary' position='fixed' sx={{ display: 'block' }}>
        <Toolbar>
          <Avatar alt='Tonia Del Priore' src='../favicon.ico' variant='square' />
          <Typography variant='h4'>Tonia Del Priore</Typography>
        </Toolbar>
      </AppBar>
    </Paper>
  )
}