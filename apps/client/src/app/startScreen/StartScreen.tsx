import React from 'react';
import ReactDOM from 'react-dom/client';
import { StartButton } from '../button/StartButton';
import { useNavigate } from "react-router-dom";

export function StartScreen() {
    const navigate = useNavigate()
    const handleStart = () => {
      navigate("/profile")
    }
    return (
    <div className="startScreen">
    <StartButton
        handleClick={handleStart}
        text="start"></StartButton>
    </div>
    )
}