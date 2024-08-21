import './Tag.css'
import React from 'react';

const Tag = ({ title, mode, style }) => {
    return (
        <div className={`tag-main ${mode}`} style={style} >
            <p className="tag-title">
                {title}
            </p>
        </div>
    )
}

export { Tag };