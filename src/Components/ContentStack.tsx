import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Bubble from './Bubble';

export default function ContentStack() {
  return (
    <Stack
      alignItems='center'
      direction='column'
      justifyContent='flex-start'
      sx={{ maxWidth: '70%' }}
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

      <Stack>
        <Divider aria-hidden='true' color='primary.dark' orientation='horizontal' flexItem>
          <Typography color='primary.dark' variant='h3'>
            Projects
          </Typography>
        </Divider>

        <Stack direction='row'>
          <Bubble link="https://toninjaa.github.io/weather-app/" title='Weather Widget' />

          <Bubble link="https://toninjaa.github.io/palindrome-site/" title='Palindrome Detector' />

          <Bubble link="https://rubygems.org/profiles/toninjaa" title='Ruby Gems' />
        </Stack>
      </Stack>
    </Stack>
  )
}