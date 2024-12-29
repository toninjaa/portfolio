import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function SkillStack() {
  const env = window.location.href.includes("local") ? ".." : ".";
  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Stack
      alignItems={{ xs: 'flex-start', sm: 'center' }}
      direction={{ xs: 'row', sm: 'column' }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      justifyContent='flex-start'
      sx={{ maxWidth: '15%' }}
    >
      {largeScreen ? ( 
      <>
        <Avatar
          alt='Tonia Del Priore'
          src={`${env}/laptopWave.png`}
          sx={{ height: 'auto', width: '10vw' }}
          variant='square'
        />

        <Divider
          aria-hidden='true'
          color='primary.dark'
          orientation='horizontal'
          flexItem
        >
          <Typography color='primary.dark' variant='subtitle2'>
            Languages
          </Typography>
        </Divider>
        <Typography color='primary.dark' variant='subtitle2'>
          Go, TypeScript, JavaScript, HTML, CSS, SQL, SoQL
        </Typography>
        
        <Divider
          aria-hidden='true'
          color='primary.dark'
          orientation='horizontal'
          flexItem
        >
          <Typography color='primary.dark' variant='subtitle2'>
            Libraries
          </Typography>
        </Divider>
        <Typography color='primary.dark' variant='subtitle2'>
          React, Material UI, GORM
        </Typography>
        
        <Divider
          aria-hidden='true'
          color='primary.dark'
          orientation='horizontal'
          flexItem
        >
          <Typography color='primary.dark' variant='subtitle2'>
            Version Control
          </Typography>
        </Divider>
        <Typography color='primary.dark' variant='subtitle2'>
          Git, GitHub
        </Typography>

        <Divider
          aria-hidden='true'
          color='primary.dark'
          orientation='horizontal'
          flexItem
        >
          <Typography color='primary.dark' variant='subtitle2'>
            DevOps
          </Typography>
        </Divider>
        <Typography color='primary.dark' variant='subtitle2'>
          GCP, Kubernetes, Docker, AWS Lambda
        </Typography>

        <Divider
          aria-hidden='true'
          color='primary.dark'
          orientation='horizontal'
          flexItem
        >
          <Typography color='primary.dark' variant='subtitle2'>
            Other
          </Typography>
        </Divider>
        <Typography color='primary.dark' variant='subtitle2'>
          Technical Writing, Peer Programming, Creative Problem Solving and Debugging
        </Typography>
      </>
      ) : (
        <>
        <Typography color='primary.dark' variant='subtitle2'>
          Languages: Go, TypeScript, JavaScript, HTML, CSS, SQL, SoQL
        </Typography>
        <Divider
          aria-hidden='true'
          color='primary.dark'
          orientation='vertical'
          flexItem
        />

        <Typography color='primary.dark' variant='subtitle2'>
          Libraries: React, Material UI, GORM
        </Typography>
        <Divider
          aria-hidden='true'
          color='primary.dark'
          orientation='vertical'
          flexItem
        />

        <Typography color='primary.dark' variant='subtitle2'>
          Version Control: Git, GitHub
        </Typography>
        <Divider
          aria-hidden='true'
          color='primary.dark'
          orientation='vertical'
          flexItem
        />

        <Typography color='primary.dark' variant='subtitle2'>
          DevOps: GCP, Kubernetes, Docker, AWS Lambda
        </Typography>
        <Divider
          aria-hidden='true'
          color='primary.dark'
          orientation='vertical'
          flexItem
        />

        <Typography color='primary.dark' variant='subtitle2'>
          Other: Technical Writing, Peer Programming, Creative Problem Solving and Debugging
        </Typography>
        </>
      )
      }
    </Stack>
  )
}