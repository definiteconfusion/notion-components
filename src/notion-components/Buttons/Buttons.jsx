import './Buttons.css';
import React from 'react';


const Button = ({ children, mode, onClick, className, style }) => {
    return (
        <button className={`button-main ${mode} ${className}`} onClick={onClick} style={style} >
            {children}
        </button>
    );
}

export { Button };