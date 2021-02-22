import logo from './logo.svg';
import './App.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";


const Home =()=>{
  return <h1>Hello Home</h1>
}
const News =()=>{
  return <h1>Find all news here</h1>
}

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/news">News</Link>
      <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/news"><News /></Route>
      </Switch>
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
      <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/news"><News /></Route>
      </Switch>
    </div>
  );
}

export default App;
