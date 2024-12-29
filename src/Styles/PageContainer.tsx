import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import ContactStack from '../Components/ContactStack';
import ContentStack from '../Components/ContentStack';
import SkillStack from '../Components/SkillStack';

export default function PageContainer() {
  return (
    <Stack
      alignItems='flex-start'
      direction='row'
      divider={<Divider color='primary.dark' orientation="vertical" flexItem />}
      justifyContent='center'
      spacing={4}
      sx={{ 
        margin: '2em',
      }}
    >
      <ContactStack />
      
      <ContentStack />
      
      <SkillStack />
    </Stack>
  )
}