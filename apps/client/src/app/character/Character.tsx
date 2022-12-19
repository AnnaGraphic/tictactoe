import React from 'react';
import ReactDOM from 'react-dom/client';
import { SubmitButton } from '../submitButton/SubmitButton';
import { useState, useEffect } from 'react';

export function Character(props) {
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('heart');
  //const [editName, setEditName] = useState(false);
  const avatarChoice = (e) => {
    setAvatar(e.target.value);
  };

  return (
    <div className="character">
      <h2>Choose Your Character</h2>
      <div className="card">
        <div className="left">
          <div className="UserName">
            <div className="userName">
              {username === '' && <p>enter yor name:</p>}
              {username && <h5>{username}</h5>}
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

              <label htmlFor="heart" className="icons">
                <i></i>
                <input
                  type="radio"
                  name="avatar"
                  id="heart"
                  value="heart"
                  checked={avatar === 'heart'}
                  onChange={avatarChoice}
                ></input>
                <span>
                  <img
                    className="icons"
                    src={'/assets/avatar-heart-192x192_1.png'}
                    alt="default"
                  />
                </span>
              </label>
            </form>
                        <SubmitButton
              route="/api/usernamex"
              payload={{ username, avatar }}
              onSuccess={() => {
                setUsername;
                console.log('user x = ', username);
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
              alt="default"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
