import logo from './logo.svg';
import './App.css';
import Example from './Example';
import FunctionalExample from './FunctionalExample';
import {useState} from "react";

function App() {
  const [showComponent, setShowComponent] = useState(true)
  return (
    <div className="App">
      Main Component
      <button onClick={()=> setShowComponent(!showComponent)}>Mount/Unmount component</button>
      {showComponent ?<FunctionalExample /> : null}
    </div>
  );
}

export default App;
