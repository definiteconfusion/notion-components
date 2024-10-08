import './Link.css'
import React from 'react';

const Link = ({ children, destination, color, mode, className, style }) => {
    return (
    <a href={destination} className={`link-main  back-${mode} ${className}`} style={{color: color, ...style}}>
        {children}
    </a>
  );
};

export { Link };