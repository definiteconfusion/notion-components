import './Image.css';
import React, { Suspense, lazy } from 'react';
import { Spinner } from '../Spinner/Spinner';

// Lazy load the image component itself
const LazyImage = React.forwardRef(({ src, width, height, alt, borderRad, className }, ref) => {
    return (
        <img
            ref={ref}
            className={className}
            src={src}
            alt={alt}
            loading="lazy" // Enables native lazy loading
            style={{
                width: width,
                height: height,
                borderRadius: borderRad,
                objectFit: 'cover'
            }}
        />
    );
});

const Image = ({ src, width, height, alt, borderRad, className, mode }) => {
    return (
        <Suspense fallback={<Spinner mode={mode}  />}>
            <LazyImage
                src={src}
                width={width}
                height={height}
                alt={alt}
                borderRad={borderRad}
                className={className}
            />
        </Suspense>
    );
};

export { Image };
