import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import ContactStack from '../Components/ContactStack';
import ContentStack from '../Components/ContentStack';
import SkillStack from '../Components/SkillStack';

export default function PageContainer() {
  return (
    <Stack
      alignItems='flex-start'
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      divider={<Divider color='primary.dark' orientation="vertical" flexItem />}
      justifyContent='center'
      sx={{ 
        margin: { xs: '0.25rem 1rem 1rem', sm: '0.5rem 1.25rem 0', md: '0.5rem 2rem 0' },
        width: 'calc(100% - 2rem)',
      }}
    >
      <ContactStack />
      
      <ContentStack />
      
      <SkillStack />
    </Stack>
  )
}