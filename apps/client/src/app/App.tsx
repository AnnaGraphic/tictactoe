import styles from './app.module.css';
import { Component } from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import { Board } from './board/Board';
import { Display } from './display/Display';
import { WallOfFame } from './wallOfFame/WallOfFame';
import { Character } from './character/Character';
import { CharacterO } from './character/CharacterO';
import { StartScreen } from './startScreen/StartScreen'

export function App() {
  const [player, setPlayer] = useState('X');
  
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
            <div className="dropdown">
  <h1 className='dropdown'>X</h1>
  <div className="dropdown-content">
    <p><Link to={`/`}>start</Link></p>
    <br />
    <p><Link to={`/wall-of-fame`}>wall of fame</Link></p>
  </div>
</div>
          </div>

          {/* START: routes */}
          <Routes>
            <Route
            path="/"
            element={<StartScreen></StartScreen>}>
            </Route>
            <Route
              path="/game"
              element={
                <Board
                  player={player}
                  setPlayer={setPlayer}
                  game={game}
                  link="/"
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
