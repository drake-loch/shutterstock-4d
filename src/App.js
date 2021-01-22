import logo from './logo.svg';
import './App.css';

import Overlay from './Components/Overlay/Overlay';
import Editor from './Components/Editor/Editor';

const sstk = require('shutterstock-api');


function App() {
  return (
    <div className="App">
      <Overlay />
      <Editor />
    </div>
  );
}

export default App;
