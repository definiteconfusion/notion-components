import React, { useState } from 'react';
import './Toggle.css';

const Toggle = ({ checked, onChange, mode }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleToggle = () => {
        const newChecked = !isChecked;
        setIsChecked(newChecked);
        onChange(newChecked);
    };

    return (
        <div 
            className={`toggle-main ${isChecked ? 'toggle-main-on' : 'toggle-main-off'}-${mode}`} 
            onClick={handleToggle}
        >
            <div className={`toggle-knob ${isChecked ? 'toggle-knob-on' : 'toggle-knob-off'}`}></div>
        </div>
    );
}

export { Toggle };