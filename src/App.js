import React from 'react';
import logo from './logo.svg';
import './App.css';
import Di from './components/Di'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Dice
        </p>
        <Di />
      </header>
    </div>
  );
}

export default App;
