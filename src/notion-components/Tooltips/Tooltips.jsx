import './Tooltips.css'
import React from 'react';

const ToolTip = ({ children, label, mode="light" }) => {
    let modeSave = {
        "dark": {
            "backgroundColor": "#fff",
            "color": "#0F0F0F"
        },
        "light": {
            "backgroundColor": "#0F0F0F",
            "color": "#fff"
        }
    };

    return (
        <div className="tooltip">
            {children}
            <span className="tooltiptext" style={{ backgroundColor: modeSave[mode].backgroundColor, color: modeSave[mode].color }}>{label}</span>
        </div>
    );
}

export { ToolTip };