

import './App.css'
import {Greeting} from "./components/ Greeting.tsx";

function App() {

  return (
    <div className="App">
      <h1>Start</h1>
        <Greeting name="World" />
        <Greeting name="Max" />
    </div>
  )
}

export default App
