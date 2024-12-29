import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function SkillStack() {
  const env = window.location.href.includes("local") ? ".." : "."; 

  return (
    <Stack
      alignItems='center'
      direction='column'
      justifyContent='flex-start'
      sx={{ maxWidth: '15%' }}
    >
      <Avatar
        alt='Tonia Del Priore'
        src={`${env}/laptopWave.png`}
        sx={{ height: 'auto', width: '10vw' }}
        variant='square'
      />
      <Typography color='primary.dark' variant='subtitle2'>
        <Divider aria-hidden='true' color='primary.dark' orientation='horizontal' flexItem>
          Languages
        </Divider>
        Go, TypeScript, JavaScript, HTML, CSS, SQL, SOQL 
        
        <Divider aria-hidden='true' color='primary.dark' orientation='horizontal' flexItem>
          Libraries
        </Divider>
        React, Material UI, GORM
        
        <Divider aria-hidden='true' color='primary.dark' orientation='horizontal' flexItem>
          Version Control
        </Divider>
        Git, GitHub
        
        <Divider aria-hidden='true' color='primary.dark' orientation='horizontal' flexItem>
          DevOps
        </Divider>
        GCP, Kubernetes, Docker, AWS Lambda
        
        <Divider aria-hidden='true' color='primary.dark' orientation='horizontal' flexItem>
          Other
        </Divider>
        Technical Writing, Peer Programming, Creative Problem Solving and Debugging
      </Typography>
    </Stack>
  )
}