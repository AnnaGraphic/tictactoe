import styles from './app.module.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import { Board } from './board/Board';
import { Display } from './display/Display';
import { WallOfFame } from './wallOfFame/WallOfFame';
import { Character } from './character/Character';

export function App() {
  const [player, setPlayer] = useState('X');
  const [win, setWin] = useState(null);

  return (
    <>
      <div className="app">
        <BrowserRouter>
          <div className="navbar">
            <div className="headline">
              <p>just another </p> <h1 className="headline">Tic Tac Toe</h1>
            </div>
          </div>

          {/* START: routes */}
          <Routes>
            <Route
              path="/game"
              element={
                <Board
                  player={player}
                  setPlayer={setPlayer}
                  setWin={setWin}
                  win={win}
                />
              }
            ></Route>

            <Route
              path="/wall-of-fame"
              element={<WallOfFame></WallOfFame>}
            ></Route>
            <Route path="/profile" element={<Character></Character>}></Route>
          </Routes>
          {/* END: routes */}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
