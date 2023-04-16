import React from 'react';
import ReactDOM from 'react-dom/client';

export function DisplayPlayerX(props) {
 //   console.log("props in display x", props, props.game)

return (
    <div className="displayPlayers">
        <img
              className="floating"
              src={`/assets/avatar-${props.game.user_x_avatar}-big.png`}
              alt="player x"
            />
    </div>
)

}
