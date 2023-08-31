//import './board.module.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { Square } from '../square/Square';
import { Display } from '../display/Display';
import { DisplayPlayerX } from '../display/DisplaPlayerX';
import { DisplayPlayerO } from '../display/DisplaPlayerO';
import { StartButton } from '../button/StartButton';
import { SubmitButton } from '../button/SubmitButton'

function checkforWin(board) {
//console.log("board.", board);
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
  return winner ? winner : board.includes('') ? null : 'No one';
}
export function Board(props) {
 // console.log("props in board", props)
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [win, setWin] = useState(null);
  const game_id = props.game.game_id
  const location = useNavigate();
  const audios  = ['../assets/audio/fist-punch-3.mp3', '../assets/audio/middle-punch1.mp3', '../assets/audio/punch.mp3', '../assets/audio/ough.mp3',];
   let audio = new Audio(audios[Math.floor(Math.random() * audios.length)]);
  const start = () => {
   audio.play()
  }
  const handleClick = () => {
  // console.log('click', board)
  // audio.play();
  setBoard(['', '', '', '', '', '', '', '', '']);
  }
  const handleRevenge = () => {
  // console.log('click', board)
  // location.replace("/")
  }

  function handleTurn(i, newValue) {
    audio.play();
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
  }

//let ergebnis = null;
//const [thisGame, setThisGame] = useState({})

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

  return (
    <div className='aroundthegame'>
      <div className="game">
        <DisplayPlayerX
          game={props.game}>
        </DisplayPlayerX>
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
        text="reset">
        </StartButton>
      )}
      {win && (            
         <SubmitButton
          route="/api/win"
          payload={{ win, game_id}}
          onSuccess={(response) => {
          location("props.link");
          console.log("api/win", response)
          }}
          onError={(err) => {console.log(err)}}
          text={<Link className='bangers' to={`/profile`}>revenge</Link>}
      ></SubmitButton>
      )}
    </div>
  );
}
