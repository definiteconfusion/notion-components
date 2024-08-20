import './Tag.css'
import React from 'react';

const Tag = ({ title, mode }) => {
    return (
        <div className={`tag-main ${mode}`}>
            <p className="tag-title">
                {title}
            </p>
        </div>
    )
}

export { Tag };