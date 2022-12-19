import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';

import ReactDOM from 'react-dom/client';
import { Game } from 'tictactoe-typings';

export function WallOfFame(props) {
  const [game, setGame] = useState<Game[]>([]);
  // useEffect 1. (server fetchen) im then-block setGame
  return (
    <div className="container">
      <h1>walloffame</h1>
    
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-1">time stamp</div>
          <div className="col col-2">winner</div>
          <div className="col col-3">loser</div>
        </li>
        {/* mappen */}
        <li className="table-row">
          <div className="col col-1" data-label="time">
          </div>
          <div className="col col-2" data-label="winner">
            panda
          </div>
          <div className="col col-3" data-label="loser">
            hulk
          </div>
        </li>
      </ul>
    </div>
  );
}
