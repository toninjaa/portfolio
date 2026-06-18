import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ProjectBubbles } from './Bubble';

const projects = [
  { link: 'https://toninjaa.github.io/weather-app/', title: 'Weather Widget' },
  { link: 'https://toninjaa.github.io/palindrome-site/', title: 'Palindrome Detector' },
  { link: 'https://rubygems.org/profiles/toninjaa', title: 'Ruby Gems' },
  { link: 'https://toninjaa.github.io/sketchy', title: 'Screenplay Writer' },
];

export default function ContentStack() {
  return (
    <Stack
      alignItems='center'
      direction='column'
      justifyContent='flex-start'
      sx={{ minWidth: '70%' }}
    >
      <Stack>
        <Divider aria-hidden='true' color='primary.dark' orientation='horizontal' flexItem>
          <Typography color='primary.dark' variant='h3'>
            About Me
          </Typography>
        </Divider>
        <Typography color='primary.dark'>
          I'm a fullstack Software Engineer and I LOVE what I do. I'm not a designer, but I have a knack for UX and if you dream it, I can build it. Take a look at my Projects to get a glimpse of some things I've created.
        </Typography>
      </Stack>

      <Stack sx={{ width: '100%' }}>
        <Divider aria-hidden='true' color='primary.dark' orientation='horizontal' flexItem >
          <Typography color='primary.dark' variant='h3'>
            Projects
          </Typography>
        </Divider>

        <ProjectBubbles bubbles={projects} />
      </Stack>
    </Stack>
  )
}
