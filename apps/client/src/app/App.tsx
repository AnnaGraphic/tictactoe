import styles from './app.module.css';
import { Board } from './board/Board';
import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';

export function App() {
  const [player, setPlayer] = useState('X');
  return (
    <>
      <div>
        <Board player={player} setPlayer={setPlayer} />
        {/* START: routes */}

        {/* END: routes */}
      </div>
    </>
  );
}

export default App;
