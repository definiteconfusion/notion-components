import { Spinner } from '../Spinner/Spinner';
import React from 'react';
import { Suspense } from 'react';

const Fallback = ({ children, mode }) => {
    return (
        <Suspense fallback={<Spinner
            mode={mode}
        />
        }
        >
            {children}
        </Suspense>
    );
}

export { Fallback };