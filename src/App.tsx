import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="name">Tonia Del Priore</h1>
      <div className="stage">
        <a className="link-item" href="https://toninjaa.github.io/weather-app/" target="_blank">
          <span className="shadow"></span>
          Weather Widget
        </a>
      </div>

      <div className="stage">
        <a className="link-item" href="https://toninjaa.github.io/palindrome-site/" target="_blank">
          <span className="shadow"></span>
          Palindrome Detector
        </a>
      </div>

      <div className="stage">
        <a className="link-item" href="https://rubygems.org/profiles/toninjaa" target="_blank">
        <span className="shadow"></span>
          Ruby Gems
        </a>
      </div>
    </div>
  );
}

export default App;
