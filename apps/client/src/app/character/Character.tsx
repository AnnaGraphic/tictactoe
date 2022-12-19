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

  useEffect(() => {
    // fetch('/api/username-x')
    //   .then((res) => res.json())
    //   .then((response) => {
    //     console.log('/api/username-x response', response);
    //     //setUsername([...response]);
    //   });
  }, []);

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

            <SubmitButton
              route="/api/usernamex"
              payload={{ username, avatar }}
              onSuccess={() => {
                setUsername;
                console.log('user x = ', username);
              }}
              onError={() => {}}
              text="submit"
            ></SubmitButton>
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
                    src={'/assets/avatar-cat-192x192_1.png'}
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
              {/* <SubmitButton
                route="/api/uavatar-x"
                payload={{ username }}
                onSuccess={() => {
                  setUsername;
                  console.log('avatar ', avatar);
                }}
                onError={() => {}}
                text="submit"
              ></SubmitButton> */}
            </form>
          </div>
        </div>
        {/* right */}
        <div className="right">
          <div className="avatarPic">
            <img
              className="floating"
              src={'/assets/avatar-luck-192x192_1.png'}
              alt="default"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
