import React from 'react';
import ReactDOM from 'react-dom/client';

export function StartButton(props) {
   
 return (  
    <button className="start"
    type="submit"
    onClick={props.handleClick}
    >{props.text}</button>
 )
}