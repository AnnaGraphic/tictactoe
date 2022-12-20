import styles from './app.module.css';
import { Component } from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import { Board } from './board/Board';
import { Display } from './display/Display';
import { WallOfFame } from './wallOfFame/WallOfFame';
import { Character } from './character/Character';
import { CharacterO } from './character/CharacterO';

export function App() {
  const [player, setPlayer] = useState('X');
  const [win, setWin] = useState(null);
  const [game, setGame] = useState({})

  function updateGame(game) {
        setGame(game)
        console.log("updateGame", game);
    }

  return (
    <>
      <div className="app">
        <BrowserRouter>
          <div className="navbar">
            <div className="headline">
              <p className='bangers'>ultimate</p> <h1 className="headline">Tic Tac Toe</h1>
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
                  game={game}
                />
              }
            ></Route>

            <Route
              path="/wall-of-fame"
              element={<WallOfFame></WallOfFame>}
            ></Route>
            <Route path="/profile" element={<Character
                  game={game}
                  updateGame={updateGame}
                  link="/profileo"
            ></Character>}></Route>
            <Route path="/profileo" element={<CharacterO
                  game={game}
                  link="/game"
                  updateGame={updateGame}></CharacterO>}></Route>
          </Routes>
          {/* END: routes */}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
