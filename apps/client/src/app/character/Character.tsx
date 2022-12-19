import React from 'react';
import ReactDOM from 'react-dom/client';
import { SubmitButton } from '../submitButton/SubmitButton';
import { useState, useEffect } from 'react';

export function Character(props) {
  const [username, setUsername] = useState('X');
  //const [editName, setEditName] = useState(false);

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
            <div className="userName">{username}</div>
            <input
              type="text"
              name="inputUserName"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="type your name"
            ></input>
            {/* send to db? store in a cookie? */}

            <SubmitButton
              route="/api/username-x"
              payload={{ username }}
              onSuccess={() => {
                setUsername;
                console.log('user x = ', username);
              }}
              onError={() => {}}
              text="submit"
            ></SubmitButton>
          </div>

          <div className="chooseAvatar">
            <div className="radios">
              <label htmlFor="hulk" className="material-icons">
                <i></i>
                <input
                  type="radio"
                  name="avatar"
                  id="hulk"
                  value="hulk"
                  // checked
                ></input>
                <span>hulk</span>
              </label>

              <label htmlFor="heart" className="material-icons">
                <i></i>
                <input
                  type="radio"
                  name="avatar"
                  id="heart"
                  value="heart"
                ></input>
                <span>heart</span>
              </label>
            </div>
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
