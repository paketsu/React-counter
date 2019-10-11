import React from 'react';
import Counter from './Counter/Counter';
import CounterHook from './CounterHook/CounterHook';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="Pauliina's counter">
      </header>
      <Counter />
      <CounterHook />
    </div>
  );
}

export default App;
