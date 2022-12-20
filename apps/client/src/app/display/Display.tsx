import React from 'react';
import ReactDOM from 'react-dom/client';

export function Display(props) {
 // const winTune = new Audio("/assets/")
  if (props.player === 'X' && props.win === null) {
    return (
      <div className="display">
        <p>{props.game.user_x}'s turn</p>
      </div>
    );
  } else if (props.player === 'O' && props.win === null) {
    return (
      <div className="display">
        <p>{props.game.user_o}'s turn</p>
      </div>
    );
  } else if (props.win === 'X') {
    return (
      <div className="display">
        <h3>{props.game.user_x} wins!</h3>
      </div>
    );
   } else  if (props.win === 'O') {
    return (
      <div className="display">
        <h3>{props.game.user_o} wins!</h3>
      </div> )
  } else {return (
      <div className="display">
        <h3>It's a tie!</h3>
      </div>)}
}
