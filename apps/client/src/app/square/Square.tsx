import React from 'react';
import ReactDOM from 'react-dom/client';

export function Square(props) {

 // console.log("square ", props.thisGame)
  
  if (props.fill === 'O' && props.game.user_o_avatar === props.game.user_x_avatar) {
    return (
      <button className="square" onClick={props.click}>
        <img
          className="avatar"
          src={`/assets/avatar-${props.game.user_o_avatar}-192x192_2.png` || 'O'}
          alt="O"
        />
      </button>
    );
  } 
  else if (props.fill === 'O') {
    return (
      <button className="square" onClick={props.click}>
        <img
          className="avatar"
          src={`/assets/avatar-${props.game.user_o_avatar}-192x192_1.png` || 'O'}
          alt="O"
        />
      </button>
    );
  } else if (props.fill === 'X') {
    return (
      <button className="square" onClick={props.click}>
        <img
          className="avatar"
          src={`/assets/avatar-${props.game.user_x_avatar}-192x192_1.png` || 'X'}
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
