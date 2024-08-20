import './Image.css'
import React from 'react';

const Image = ({ src, width, height, alt, borderRad, className }) => {
    return (
        <img 
            className={className}
            src={src}
            alt={alt}
            style={{
                width: width,
                height: height,
                borderRadius: borderRad,
                objectFit: 'cover'
            }}
        />
    )
}

export { Image }