import React from 'react';
import ReactDOM from 'react-dom/client';
import { SubmitButton } from '../button/SubmitButton';
import { useState, useEffect } from 'react';

export function CharacterO(props) {
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('hulk');
  const user_x = props.game.user_x;
  const avatarChoice = (e) => {
    setAvatar(e.target.value);
  };
  
 console.log('game in O ', props.game);
  return (
    <div className="character">
      <h2>Choose Your Character</h2>
      <div className="card">
        <div className="left"> 
          <div className="UserName">
            <div className="userName">
              {!props.game.user_o && <p>enter yor name:</p>}
              {username && <h5>{props.game.user_o}</h5>}
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
                <i></i>
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
                <i></i>
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
            </form>
            <SubmitButton
              route="/api/user0"
              payload={{ username, avatar, user_x }}
              onSuccess={() => {
                props.updateGame({...props.game, user_o: username,  user_o_avatar: avatar})
                console.log('game O', props.game);
                setUsername;
                location.replace("/game")
              }}
              onError={(err) => {console.log(err);
                     location.replace("/game")}}
              text="submit"
            ></SubmitButton>
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
