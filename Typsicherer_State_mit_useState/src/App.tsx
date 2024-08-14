import './App.css'
import {useState} from "react";
import {Counter} from "./components/Counter.tsx";

//Übung 2: Typsicherer State mit useState
// Aufgabe:
// Erstelle eine React-Komponente, die eine Zahl anzeigt und einen Button, um diese Zahl zu erhöhen. Die Zahl sollte im State gespeichert werden, und der State sollte typsicher sein.
//
// Anforderungen:
// Verwende useState, um den Zählerstand im State zu speichern.
// Stelle sicher, dass der State den richtigen Typ hat (eine Zahl).
// Die Komponente sollte einen Button haben, der bei jedem Klick den Zählerstand um 1 erhöht.
// Beispiel:
// Wenn die Komponente gerendert wird, sollte sie etwa so aussehen:
//

// // Erwartete Ausgabe
// // Zähler: 0
// // [Klick-Button]
// // (Nach einem Klick auf den Button)
// // Zähler: 1



function App() {

    const [count, setCount] = useState(0)

    const decrement = () => setCount(count - 1)
    const increment = () => setCount(count + 1)

  return (
    <div className="App">
      <h1>Counter</h1>
        <Counter counter={count} decrement={decrement} increment={increment}/>
    </div>
  )
}

export default App
