import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

export function WallOfFame(props) {
  return (
    <div className="container">
      <h1>walloffame</h1>
      <ul class="responsive-table">
        <li class="table-header">
          <div class="col col-1">time stamp</div>
          <div class="col col-2">winner</div>
          <div class="col col-3">loser</div>
        </li>
        <li class="table-row">
          <div class="col col-1" data-label="time">
            17.12.2022
          </div>
          <div class="col col-2" data-label="winner">
            panda
          </div>
          <div class="col col-3" data-label="loser">
            hulk
          </div>
        </li>
      </ul>
    </div>
  );
}
