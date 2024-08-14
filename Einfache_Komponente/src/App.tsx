import './App.css'
import {Greeting} from "./components/ Greeting.tsx";

//Übung 1: Eine einfache typsichere Komponente
// Aufgabe:
// Erstelle eine React-Komponente in TypeScript, die eine einfache Begrüßungsnachricht anzeigt. Die Komponente sollte einen Prop name entgegennehmen,
// der ein string ist. Wenn der name-prop nicht übergeben wird, sollte ein Standardname "Welt" verwendet werden.
//
// Tipps:
//
// Verwende Props-Typen zur Definition der Typen der Props.
// Setze einen Standardwert für den name-prop.
// Beispiel:
// tsx
// Code kopieren
// // Erwartete Ausgabe
// // <Greeting name="Max" /> sollte "Hallo, Max!" anzeigen
// // <Greeting /> sollte "Hallo, Welt!" anzeigen

function App() {

  return (
    <div className="App">
      <h1>Start</h1>
        <Greeting/>
        <Greeting name="Max" />
    </div>
  )
}

export default App
