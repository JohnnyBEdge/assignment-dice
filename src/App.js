import React from 'react';
import logo from './logo.svg';
import './App.css';
import Di from './components/Di'
import DiceBoard from './components/DiceBoard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./dice.png" className="dice-logo" alt="A pair of dice." />
        <p>
          Create a new di by entering the number of desired sides below:
        </p>
        <DiceBoard />
      </header>
    </div>
  );
}

export default App;
