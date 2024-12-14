import './App.css';
import { ThemeProvider } from '@mui/material';
import Projects from './Components/Projects';
import Header from './Components/Header';
import Theme from './Styles/Theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <Projects />
    </ThemeProvider>
  );
}

export default App;
