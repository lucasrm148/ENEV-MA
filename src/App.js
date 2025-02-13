import logo from './logo.svg';
import './App.css';
import MainPage from './View/landpage/MainPage/MainPage.js';

function App() {
  return (
    <div className="App">
      
      <MainPage />
      <div style={{width:'1920px',height:'1080px'}}>
      </div>
     
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
