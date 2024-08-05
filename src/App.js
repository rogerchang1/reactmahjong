import logo from './logo.svg';
import './App.css';
import { RenderTile } from './components/render/Render.tsx';
import { Key } from './components/keyboard/Key.tsx';

function App() {
  return (
    <Key value={"1s"}/>
    // <div className="App">
    //   <header className="App-header">
        
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
