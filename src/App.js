import logo from './logo.svg';
import './App.css';
import Menu from'./NewComponent/Menu';
import Ccomponent from'./NewComponent/Ccomponent';
import Fcomponent from'./NewComponent/Fcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">       
        <Ccomponent 
        numbers={[1,2,3,4,5]}
        />
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