import React from 'react';
import ReactDOM from 'react-dom/client';

export function Display(props) {
  if (props.player === 'X' && props.win === null) {
    return (
      <div className="display">
        <p>{props.player}'s turn</p>
      </div>
    );
  } else if (props.player === 'O' && props.win === null) {
    return (
      <div className="display">
        <p>{props.player}'s turn</p>
      </div>
    );
  } else {
    return (
      <div className="display">
        <p>dings {props.win}</p>
      </div>
    );
  }
}
