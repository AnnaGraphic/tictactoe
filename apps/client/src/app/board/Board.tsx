import React from 'react';
import ReactDOM from 'react-dom/client';
//import './board.module.css';
import { useState } from 'react';
import { Square } from '../square/Square';

function checkforWin(board) {
  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let winner = null;
  console.log('winner', winner);
  winCombos.forEach(function (combo, index) {
    if (
      board[combo[0]] &&
      board[combo[0]] === board[combo[1]] &&
      board[combo[0]] === board[combo[2]]
    ) {
      //console.log('board[combo[0]', board[combo[0]]);
      winner = board[combo[0]];
    }
  });
  console.log('checkforwin');
  // returns tie/ winner:
  return winner ? winner : board.includes('') ? null : 'T';
}

export function Board(props) {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  let ergebnis = null;

  // +++ methods +++
  function handleTurn(i, newValue) {
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
    console.log('hasUpdated', hasUpdated);
    if (hasUpdated) {
      if (props.player === 'X') {
        props.setPlayer('O');
      } else {
        props.setPlayer('X');
      }
    } else {
      console.log('some message to player - square is occupied');
    }
    ergebnis = checkforWin(newBoard);
    props.setWin(ergebnis);

    console.log('win', props.win);
  }

  return (
    <div className="board">
      {board.map((value, index) => (
        <Square
          key={index}
          fill={value}
          click={() => handleTurn(index, props.player)}
        />
      ))}
    </div>
  );
}
