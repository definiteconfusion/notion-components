import './Containers.css'
import React from 'react';

// Stacking  children objects in the Block direction 
const Vstack = ({ children, control, padding, style }) => {
    if (children.length === undefined) {
        throw new Error("{'type':'error', 'code': 201, 'desc':'>1 Children Required','component': 'Vstack'}");
    }
    else {
        return (
            <div className="vstack-main" style={{ alignItems: control, ...style }}>
                {children.map((child, index) => (
                    <div key={index} style={{ marginBlock: padding }}>
                        {child}
                    </div>
                ))}
            </div>
        );
    }
}

// Stacking  children objects in the Inline direction 
const Hstack = ({ children, control, padding, style }) => {
    if (children.length === undefined) {
        throw new Error("{'type':'error', 'code': 201, 'desc':'>1 Children Required', 'component': 'Hstack'}");
    }
    else {
        return (
            <div className="hstack-main" style={{ alignItems: control, ...style }}>
                {children.map((child, index) => (
                        <div key={index} style={{ marginInline: padding }}>
                            {child}
                        </div>
                    ))}
            </div>
            );
    }
}

export { Vstack, Hstack };