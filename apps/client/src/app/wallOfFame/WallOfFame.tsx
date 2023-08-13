import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';

import ReactDOM from 'react-dom/client';
import { Game } from 'tictactoe-typings';

export function WallOfFame(props) {
  const [games, setGames] = useState([])

  const server_endpoint = process.env.NX_SERVER_ENDPOINT || "http://localhost:3334";


  // useEffect 1. (server fetchen) im then-block setGame

    useEffect(() => {
        fetch(`${server_endpoint}/api/getgames`)
            .then((res) => res.json())
            .then((response) => {
                if (response) {
                    console.log("response in wof ", response);
                    //"success true"
                    //eintraege setzen
                    setGames([...response])
                } else {
                    //"success false"
                }
            }).catch((err) => {console.log(err)})
    }, []);

  return (
    <div className="table-container">
      <h1>walloffame</h1>
    
                  <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-1">date</div>
          <div className="col col-2">winner</div>
          <div className="col col-3">character</div>
          <div className="col col-4">loser</div>
          <div className="col col-5">character</div>
        </li>

         {games.map((game) => {
          return (


        <li className="table-row">
          <div className="col col-1" data-label="time"> {game.created_at}
          </div>
          <div className="col col-2" data-label="winner">
            {game.user_x}
          </div>
          <div className="col col-3" data-label="avatar winner">
           {game.user_x_avatar}
          </div><div className="col col-4" data-label="loser">
            {game.user_o}
          </div><div className="col col-5" data-label="avatar loser">
            {game.user_o_avatar}
          </div>
        </li>
            
         );
                    })}

                    
                {/* <li className="table-row">
          <div className="col col-1" data-label="time">
          </div>
          <div className="col col-2" data-label="winner">
            panda
          </div>
          <div className="col col-3" data-label="avatar winner">
            panda
          </div><div className="col col-4" data-label="loser">
            hulk
          </div><div className="col col-5" data-label="avatar loser">
            hulk
          </div>
        </li> */}
  
  </ul>
    </div>
  );
}
