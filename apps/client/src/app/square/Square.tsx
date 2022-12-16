import React from 'react';
import ReactDOM from 'react-dom/client';

export function Square(props) {
  return (
    <button className="square" onClick={props.click}>
      {props.fill}
    </button>
  );
}
