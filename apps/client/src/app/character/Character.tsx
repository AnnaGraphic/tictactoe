import React from 'react';
import ReactDOM from 'react-dom/client';
import { SubmitButton } from '../button/SubmitButton';
import { useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export function Character(props) {
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('anna');
    const location = useNavigate()
  //const [editName, setEditName] = useState(false);
  const avatarChoice = (e) => {
    setAvatar(e.target.value);
  };


 console.log('game in X ', props.game);

  return (
    <div className="character">
      <h2>Choose Your Character</h2>
      <div className="card">
        <div className="left">
          <div className="UserName">
            <div className="userName">
              {!props.game.user_x && <p>enter yor name:</p>}
              {username && <h5>{props.game.user_x}</h5>}
            </div>
            <input
              type="text"
              name="inputUserName"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="type your name"
            ></input>
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
                    alt="hulk"
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
                    alt="anna"
                  />
                </span>
              </label>
            </form>
            
             <SubmitButton
              route="/api/userx"
              payload={{ username, avatar }}
              onSuccess={() => {
                props.updateGame({...props.game, user_x: username,  user_x_avatar: avatar})
                // setUsername;
                console.log("success")
                location(props.link)
              }}
              onError={(err) => {console.log(err)}}
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
