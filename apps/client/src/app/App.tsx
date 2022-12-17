import styles from './app.module.css';
import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import { Board } from './board/Board';
import { Display } from './display/Display';

export function App() {
  const [player, setPlayer] = useState('X');
  const [win, setWin] = useState(null);

  return (
    <>
      <div className="app">
        <div className="navbar">
          <div className="headline">
            <p>just another </p> <h1 className="headline">Tic Tac Toe</h1>
          </div>
        </div>
        <div className="game">
          <Display player={player} win={win} />
          <Board
            player={player}
            setPlayer={setPlayer}
            setWin={setWin}
            win={win}
          />
          {/* START: routes */}
          {/* END: routes */}
        </div>
      </div>
    </>
  );
}

export default App;
