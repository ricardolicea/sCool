import logo from './logo.svg';
import './App.css';
import TabButton from './components/TabButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <section id="menu">
        <TabButton> Students </TabButton>
        <TabButton> Teachers </TabButton>
        <TabButton> Groups </TabButton>
      </section>
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
