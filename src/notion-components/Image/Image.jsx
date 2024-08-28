import './Image.css'
import React from 'react';
import { Suspense } from 'react';

const Image = ({ src, width, height, alt, borderRad, className }) => {
    return (
        <Suspense fallback="Loading...">
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
        </Suspense>
    )
}

export { Image }