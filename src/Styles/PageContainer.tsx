import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import AboutMe from '../Components/AboutMe';
import Projects from '../Components/Projects';

export default function PageContainer() {
  return (
    <Stack
      alignItems='flex-start'
      direction='row'
      divider={<Divider color='primary' orientation="vertical" flexItem />}
      justifyContent='center'
      spacing={4}
      sx={{ 
        margin: '2em',
      }}
    >
      <Stack>
        <Avatar
          alt='Tonia Del Priore'
          src='../brontosaurus.png'
          sx={{ height: 'auto', width: '10vw' }}
          variant='square'
        />
      </Stack>
      
      <Stack
        alignItems='center'
        direction='column'
        justifyContent='flex-start'
      >
        <AboutMe />
        <Projects />
      </Stack>
      
      <Stack>
      <Avatar
          alt='Tonia Del Priore'
          src='../laptop wave.png'
          sx={{ height: 'auto', width: '10vw' }}
          variant='square'
        />
      </Stack>
    </Stack>
  )
}