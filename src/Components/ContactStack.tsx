import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function ContactStack() {
  const [copySuccess, setCopySuccess] = useState(false);
  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up('sm'));
  
  function handleMailClick() {
    navigator.clipboard.writeText('toniadelpriore@gmail.com')
    setCopySuccess(true);
  }

  // local and production have different paths, so we need this to tell
  // each env where to look
  const env = window.location.href.includes("local") ? ".." : "."; 

  return (
    <Stack
      alignItems={{ xs: 'flex-start', sm: 'center' }}
      direction={{ xs: 'row', sm: 'column' }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      justifyContent={{ xs: 'space-between', sm: 'flex-start' }}
      sx={{ maxWidth: '15%' }}
    >
      {largeScreen ? (
      <>
        <Avatar
          alt='Tonia Del Priore'
          src={`${env}/brontosaurus.png`}
          sx={{ height: 'auto', width: '10vw' }}
          variant='square'
        />

        <Divider aria-hidden='true' color='primary.dark' orientation='horizontal' flexItem>
          <Typography color='primary.dark' variant='subtitle2'>
            Github
          </Typography>
        </Divider>
        <a href='https://github.com/toninjaa' target='_blank'>
          <GitHubIcon style={{ color: theme.palette.primary.dark }}/>
        </a>

        <Divider aria-hidden='true' color='primary.dark' orientation='horizontal' flexItem>
          <Typography color='primary.dark' variant='subtitle2'>
            LinkedIn
          </Typography>
        </Divider>
        <a href='https://www.linkedin.com/in/toniadelpriore/' target='_blank'>
          <LinkedInIcon style={{ color: theme.palette.primary.dark }}/>
        </a>

        <Divider aria-hidden='true' color='primary.dark' orientation='horizontal' flexItem>
          <Typography color='primary.dark' variant='subtitle2'>
            Email
          </Typography>
        </Divider>

        <Button onClick={handleMailClick}>
          <Tooltip title={copySuccess ? 'Email copied to clipboard!' : 'Copy to Clipboard'}>
            <MailIcon style={{ color: theme.palette.primary.dark }} />
          </Tooltip>
        </Button>

        <Divider aria-hidden='true' color='primary.dark' orientation='horizontal' flexItem>
          <Typography color='primary.dark' variant='subtitle2'>
            Resume
          </Typography>
        </Divider>
        <a href={window.location.href.includes("local") ? '../portfolio/resume.pdf' : './resume.pdf'} target='_blank' rel='noopener noreferrer'>
          <DescriptionIcon style={{ color: theme.palette.primary.dark }} />
        </a>
      </>
      ) : (
        <>
          <Button>
            <a href='https://github.com/toninjaa' target='_blank'>
              <GitHubIcon style={{ color: theme.palette.primary.dark }}/>
            </a>
          </Button>

          <Button>
            <a href='https://www.linkedin.com/in/toniadelpriore/' target='_blank'>
              <LinkedInIcon style={{ color: theme.palette.primary.dark }}/>
            </a>
          </Button>

          <Button onClick={handleMailClick}>
            <Tooltip title={copySuccess ? 'Success' : 'Copy to Clipboard'}>
              <MailIcon style={{ color: theme.palette.primary.dark }} />
            </Tooltip>
          </Button>

          <Button>
            <a href={window.location.href.includes("local") ? '../portfolio/resume.pdf' : './resume.pdf'} target='_blank' rel='noopener noreferrer'>
              <DescriptionIcon style={{ color: theme.palette.primary.dark }} />
            </a>
          </Button>
        </>
      )}
    </Stack>
  )
}