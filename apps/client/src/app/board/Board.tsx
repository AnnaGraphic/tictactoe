import React from 'react';
import ReactDOM from 'react-dom/client';
import './board.module.css';
import { useState } from 'react';
import { Square } from '../square/Square';

export function Board(props) {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [square, setSquare] = useState();

  // +++ method +++
  function handleClick(i, newValue) {
    console.log('click');
    let newBoard = board.map((oldValue, index) => {
      if (index === i) {
        return newValue;
      }
      return oldValue;
    });
    setBoard(newBoard);
    if (props.player === 'X') {
      props.setPlayer('O');
    } else {
      props.setPlayer('X');
    }
  }

  return (
    <div className="board">
      {board.map((value, index) => (
        <Square fill={value} onClick={() => handleClick(index, props.player)} />
      ))}
    </div>
  );
}
