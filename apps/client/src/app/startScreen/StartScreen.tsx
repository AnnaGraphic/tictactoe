import React from 'react';
import ReactDOM from 'react-dom/client';
import { StartButton } from '../button/StartButton';
import { useNavigate } from "react-router-dom";

export function StartScreen() {

  const audios  = ['../assets/audio/round-1.mp3'];

   let audio = new Audio(audios[Math.floor(Math.random() * audios.length)]);
   const start = () => {
    audio.play()
   }
  
    const navigate = useNavigate()
    const handleStart = () => {
         audio.play(), 
      navigate("/profile")
    }
    return (
    <div className="startScreen">
    <StartButton
        audios={audios}
        handleClick={handleStart}
        text="start"></StartButton>
    </div>
    )
}