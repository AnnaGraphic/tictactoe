import styles from './app.module.css';
import { Board } from './board/Board';
import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';

export function App() {
  const [player, setPlayer] = useState('X');
  return (
    <>
      <div>
        <div className="navbar">
          <h1>Tic Tac Toe</h1>
        </div>
        <div className="game">
          <Board player={player} setPlayer={setPlayer} />
          {/* START: routes */}
          {/* END: routes */}
        </div>
      </div>
    </>
  );
}

export default App;
