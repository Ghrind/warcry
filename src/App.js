import React from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import { Roster } from './features/roster/Roster';
import { Compendium } from './features/compendium/Compendium';
import './App.css';
import { useSelector } from 'react-redux'

function App() {
  const state = useSelector( (state) => state);
  return (
    <div className="App">
      <div>{JSON.stringify(state)}</div>
      <h1>Compendium</h1>
      <Compendium />
      <h1>Roster</h1>
      <Roster />
    </div>
  );
}

export default App;
