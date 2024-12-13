import './App.css';
import Bubble from './Components/Bubble';

function App() {
  return (
    <>
      <h1 className="name">Tonia Del Priore</h1>
        {/* <h3 className="project-header">Projects</h3> */}
        <Bubble link="https://toninjaa.github.io/weather-app/" title='Weather Widget' />

        <Bubble link="https://toninjaa.github.io/palindrome-site/" title='Palindrome Detector' />
        
        <Bubble link="https://rubygems.org/profiles/toninjaa" title='Ruby Gems'
        />
    </>
  );
}

export default App;
