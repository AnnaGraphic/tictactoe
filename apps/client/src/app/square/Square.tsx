import React from 'react';
import ReactDOM from 'react-dom/client';

export function Square(props) {
  if (props.fill === 'O') {
    return (
      <button className="square" onClick={props.click}>
        <img
          className="avatar"
          src={'/assets/avatar-cat-192x192_1.png' || 'O'}
          alt="O"
        />
      </button>
    );
  } else if (props.fill === 'X') {
    return (
      <button className="square" onClick={props.click}>
        <img
          className="avatar"
          src={'/assets/avatar-hart-192x192_1.png' || 'X'}
          alt="X"
        />
      </button>
    );
  } else {
    return (
      <button className="square" onClick={props.click}>
        {props.fill}
      </button>
    );
  }
}
