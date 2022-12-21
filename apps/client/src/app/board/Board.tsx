import React from 'react';
import ReactDOM from 'react-dom/client';
//import './board.module.css';
import { useState, useEffect } from 'react';
import { Square } from '../square/Square';
import { Display } from '../display/Display';
import { DisplayPlayerX } from '../display/DisplaPlayerX';
import { DisplayPlayerO } from '../display/DisplaPlayerO';
import { StartButton } from '../button/StartButton';

function checkforWin(board) {
//onsole.log("board.", board);

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
  //console.log('winner', winner);
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
  //console.log('checkforwin');
  // returns tie/ winner:
  return winner ? winner : board.includes('') ? null : 'No one';
}



export function Board(props) {
  console.log("props in board", props)
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  //let ergebnis = null;
  //const [thisGame, setThisGame] = useState({})
  const [win, setWin] = useState(null);
   console.log("win", win)
 
// useEffect fuer aktuelles game (cookie-id) ?
//  useEffect(() => {
//         fetch(`http://localhost:3333/api/getgame/${props.game.game_id}`)
//             .then((res) => res.json())
//             .then((response) => {
//                 if (response) {
//                     console.log("response in board ", response);
//                     //"success true"
//                     //eintraege setzen
//              setThisGame(response)
//              console.log("thisGamet", thisGame)
//                 } else {
//                     console.log("success false")
//                 }
//             }).catch((err) => {console.log(err)})
//     }, []);

const handleClick = () => {
 // console.log('click', board)
setBoard(['', '', '', '', '', '', '', '', '']);
}
const handleRevenge = () => {
 // console.log('click', board)
location.replace("/")
}

  function handleTurn(i, newValue) {
    let hasUpdated = false;
   // console.log('click');
    let newBoard = board.map((oldValue, index) => {
      if (index === i && oldValue === '') {
        hasUpdated = true;
        return newValue;
      }
      return oldValue;
    });
    setBoard(newBoard);
   // console.log('hasUpdated', hasUpdated);
    if (hasUpdated) {
      if (props.player === 'X') {
        props.setPlayer('O');
      } else {
        props.setPlayer('X');
      }
    } else {
      console.log('some message to player - square is occupied');
    }
    setWin(checkforWin(newBoard))
    ///
   // console.log('game in board', props.game);
  }

  return (
     <div className='aroundthegame'>
    <div className="game">
      <DisplayPlayerX
      game={props.game}
      ></DisplayPlayerX>
        <div>
      
        <Display player={props.player} 
      win={win}
      game={props.game} 
      />
    <div className="board">
        {board.map((value, index) => (
          <Square
            key={index}
            fill={value}
            game={props.game}
            click={() => handleTurn(index, props.player)}
        
          />
        ))}
        </div>
      </div>
      <DisplayPlayerO
      game={props.game}
      ></DisplayPlayerO>
    </div>
     {!win && (
                    <StartButton
handleClick={handleClick}
text="reset"></StartButton>
                )}
                     {win && (
                    <StartButton
handleClick={handleRevenge}
text="revenge"></StartButton>
                )}

   </div>
  );
}
