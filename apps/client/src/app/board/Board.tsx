import React from 'react';
import ReactDOM from 'react-dom/client';
//import './board.module.css';
import { useState } from 'react';
import { Square } from '../square/Square';

export function Board(props) {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [square, setSquare] = useState();

  // +++ method +++
  function handleClick(i, newValue) {
    let hasUpdated = false;
    console.log('click');
    let newBoard = board.map((oldValue, index) => {
      if (index === i && oldValue === '') {
        hasUpdated = true;
        return newValue;
      }
      return oldValue;
    });
    setBoard(newBoard);
    //console.log('hasUpdated', hasUpdated);
    if (hasUpdated) {
      if (props.player === 'X') {
        props.setPlayer('O');
      } else {
        props.setPlayer('X');
      }
    } else {
      console.log('some message to player - square is occupied');
    }
  }

  return (
    <div className="board">
      {board.map((value, index) => (
        <Square
          key={index}
          fill={value}
          click={() => handleClick(index, props.player)}
        />
      ))}
    </div>
  );
}
