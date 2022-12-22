import React from 'react';
import ReactDOM from 'react-dom/client';

export function DisplayPlayerO(props) {
  console.log("props.game, props.player_x_avatar,props.player_o_avatar", props.game, props.game.user_x_avatar, props.game.user_o_avatar)

    if (props.game.user_x_avatar !==  props.game.user_o_avatar){
return (
    <div className="displayPlayers">
        <img
              className="floating"
              src={`/assets/avatar-${props.game.user_o_avatar}-big.png`}
              alt="player o"
            />
    </div> )
 } else {
return (
    <div className="displayPlayers">
        <img
              className="floating"
              src={`/assets/avatar-${props.game.user_o_avatar}-big_2.png`}
              alt="player o"
            />
    </div>
    )
}
}