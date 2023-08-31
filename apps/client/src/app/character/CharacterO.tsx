import React from 'react';
import ReactDOM from 'react-dom/client';
import { SubmitButton } from '../button/SubmitButton';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export function CharacterO(props) {
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('hulk');    
  const location = useNavigate()
  // const user_x = props.game.user_x;
  // const user_x_avatar = props.game.user_x_avatar;
  const game_id = props.game.game_id
 // console.log("gameid", game_id)

  const avatarChoice = (e) => {
    setAvatar(e.target.value);
    //console.log("avatar O", avatar)
  };
  
//console.log('game in O ', props.game);

  return (
    <div className="character">
      <h2>Choose Your Character</h2>
      <div className="card">
        <div className="left"> 
          <div className="UserName">
            <div className="userName">
              {/* {!props.game.user_o &&  <h5>set a name:</h5>}
              {username && <h5>{props.game.user_o}</h5>} */}
            </div>
            <input
              type="text"
              name="inputUserName"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="type your name"
            ></input>
            {/* send to db? store in a cookie? */}


          </div>

          <div className="chooseAvatar">
            <h5>select a player</h5>
            <form className="radios">
              <label htmlFor="hulk" className="icons">
                <input
                  type="radio"
                  name="avatar"
                  id="hulk"
                  value="hulk"
                  checked={avatar === 'hulk'}
                  onChange={avatarChoice}
                ></input>
                <span>
                  <img
                    className="icons"
                    src={'/assets/avatar-hulk-192x192_1.png'}
                    alt="default"
                  />
                </span>
              </label>

              <label htmlFor="anna" className="icons">
                <input
                  type="radio"
                  name="avatar"
                  id="anna"
                  value="anna"
                  checked={avatar === 'anna'}
                  onChange={avatarChoice}
                ></input>
                <span>
                  <img
                    className="icons"
                    src={'/assets/avatar-anna-192x192_1.png'}
                    alt="default"
                  />
                </span>
              </label>

              <label htmlFor="kuma" className="icons">
                <input
                  type="radio"
                  name="avatar"
                  id="kuma"
                  value="kuma"
                  checked={avatar === 'kuma'}
                  onChange={avatarChoice}
                ></input>
                <span>
                  <img
                    className="icons"
                    src={'/assets/avatar-kuma-192x192_1.png'}
                    alt="default"
                  />
                </span>
              </label>

              <label htmlFor="cyclops" className="icons">
                <input
                  type="radio"
                  name="avatar"
                  id="cyclops"
                  value="cyclops"
                  checked={avatar === 'cyclops'}
                  onChange={avatarChoice}
                ></input>
                <span>
                  <img
                    className="icons"
                    src={'/assets/avatar-cyclops-192x192_1.png'}
                    alt="default"
                  />
                </span>
              </label>

            </form>
            <div className="submitbuttoncharacterform">
            <SubmitButton
              route="/api/usero"
              payload={{ username, avatar, game_id }}
              onSuccess={() => {
                props.updateGame({...props.game, user_o: username,  user_o_avatar: avatar})
                // console.log('game O', props.game);
                // console.log(props.link)
                location(props.link)
              }}
              onError={(err) => {console.log(err);
                    }}
              text="submit"
            ></SubmitButton>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="right">
          <div className="avatarPic">
            <img
              className="floating"
              src={`/assets/avatar-${avatar}-big.png`}
              alt="selected avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
