import './App.css';
import { ThemeProvider } from '@mui/material';
import Bubble from './Components/Bubble';
import Header from './Components/Header';
import Theme from './Styles/Theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      
      <Bubble link="https://toninjaa.github.io/weather-app/" title='Weather Widget' />

      <Bubble link="https://toninjaa.github.io/palindrome-site/" title='Palindrome Detector' />
      
      <Bubble link="https://rubygems.org/profiles/toninjaa" title='Ruby Gems'
      />
    </ThemeProvider>
  );
}

export default App;
