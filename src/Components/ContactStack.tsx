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

export default function ContactStack() {
  const [copySuccess, setCopySuccess] = useState(false);
  const { palette } = useTheme();
  
  function handleMailClick() {
    navigator.clipboard.writeText('toniadelpriore@gmail.com')
    setCopySuccess(true);
  }

  const env = window.location.href.includes("local") ? "./portfolio" : "."; 
  // /Users/ToniaRudi/repos/portfolio/public/brontosaurus.png
  return (
    <Stack
      alignItems='center'
      direction='column'
      justifyContent='flex-start'
      sx={{ maxWidth: '15%' }}
    >
      <Avatar
        alt='Tonia Del Priore'
        src={`${env}../brontosaurus.png`}
        sx={{ height: 'auto', width: '10vw' }}
        variant='square'
      />

      <Divider aria-hidden='true' color='primary.dark' orientation='horizontal' flexItem>
        <Typography color='primary.dark' variant='subtitle2'>
          Github
        </Typography>
      </Divider>
      <a href='https://github.com/toninjaa' target='_blank'>
        <GitHubIcon style={{ color: palette.primary.dark }}/>
      </a>

      <Divider aria-hidden='true' color='primary.dark' orientation='horizontal' flexItem>
        <Typography color='primary.dark' variant='subtitle2'>
          LinkedIn
        </Typography>
      </Divider>
      <a href='https://www.linkedin.com/in/toniadelpriore/' target='_blank'>
        <LinkedInIcon style={{ color: palette.primary.dark }}/>
      </a>

      <Divider aria-hidden='true' color='primary.dark' orientation='horizontal' flexItem>
        <Typography color='primary.dark' variant='subtitle2'>
          Email
        </Typography>
      </Divider>
      <Button onClick={handleMailClick}>
        <Tooltip title={copySuccess ? 'Success' : 'Copy to Clipboard'}>
          <MailIcon style={{ color: palette.primary.dark }} />
        </Tooltip>
      </Button>

      <Divider aria-hidden='true' color='primary.dark' orientation='horizontal' flexItem>
        <Typography color='primary.dark' variant='subtitle2'>
          Resume
        </Typography>
      </Divider>
      <a href='../resume.pdf' target='_blank' rel='noopener noreferrer'>
        <Button size='large'>
          <DescriptionIcon style={{ color: palette.primary.dark }} />
        </Button>
      </a>

    </Stack>
  )
}