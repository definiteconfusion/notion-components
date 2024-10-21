import './Containers.css'
import React from 'react';

// Stacking  children objects in the Block direction 
const Vstack = ({ children, control, padding, style }) => {
    if (children.length === undefined) {
        return (
            <div className="vstack-main" style={{ alignItems: control, ...style }}>
                <div style={{ marginBlock: padding }}>
                    {children}
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="vstack-main" style={{ alignItems: control, ...style }}>
                {children.map((child, index) => {
                    if (index === 0) {
                        return (
                            <div key={index} style={{ marginBottom: padding }}>
                                {child}
                            </div>
                        );
                    } else if (index === children.length - 1) {
                        return (
                            <div key={index} style={{ marginTop: padding }}>
                                {child}
                            </div>
                        );
                    } else {
                        return (
                            <div key={index} style={{ marginBlock: padding }}>
                                {child}
                            </div>
                        );
                    }
                })}
            </div>
        );
    }
}

// Stacking  children objects in the Inline direction 
const Hstack = ({ children, control, padding, style }) => {
    if (children.length === undefined) {
        return (
            <div className="hstack-main" style={{ alignItems: control, ...style }}>
                <div style={{ marginInline: padding, alignItems: 'center', display: 'flex' }}>
                    {children}
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="hstack-main" style={{ alignItems: control, ...style }}>
                {children.map((child, index) => {
                    if (index === 0) {
                        return (
                            <div key={index} style={{ marginRight: padding, alignItems: 'center', display: 'flex' }}>
                                {child}
                            </div>
                        );
                    } else if (index === children.length - 1) {
                        return (
                            <div key={index} style={{ marginLeft: padding, alignItems: 'center', display: 'flex' }}>
                                {child}
                            </div>
                        );
                    } else {
                        return (
                            <div key={index} style={{ marginInline: padding, alignItems: 'center', display: 'flex' }}>
                                {child}
                            </div>
                        );
                    }
                })}
            </div>
            );
    }
}

export { Vstack, Hstack };