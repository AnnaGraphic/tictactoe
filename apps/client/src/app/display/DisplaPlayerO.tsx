import React from 'react';
import ReactDOM from 'react-dom/client';

export function DisplayPlayerO(props) {
    //console.log("props in display o", props, props.game)

return (
    <div className="displayPlayers">
        <img
              className="floating"
              src={`/assets/avatar-${props.game.user_o_avatar}-big.png`}
              alt="player o"
            />
    </div>
)

}
