import './App.css';
import { ThemeProvider } from '@mui/material';
import Header from './Components/Header';
import PageContainer from './Styles/PageContainer';
import Theme from './Styles/Theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <PageContainer/>
    </ThemeProvider>
  );
}

export default App;
