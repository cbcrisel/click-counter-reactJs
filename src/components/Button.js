import React from 'react';
import '../style-sheets/Button.css'

export function Button({text, isClickButton, clickHandler}){
    return (
        <button
            className={ isClickButton ? 'click-button': 'restart-button' }
            onClick={clickHandler} >
            {text}
        </button>
    );
}