import './Buttons.css';
import { Hstack } from '../Containers/Containers';
import React from 'react';
import { Icon } from '../Icon/Icon';


const Button = ({ children, mode, onClick, className, style }) => {
    return (
        <button className={`button-main ${mode} ${className}`} onClick={onClick} style={style} >
            {children}
        </button>
    );
}

const WideButton = ({ children, mode, onClick, className, style, edging }) => {
    return (
        <button className={`button-main max-button-width ${mode} ${className}`} onClick={onClick} style={{marginInline: edging, ...style}} >
            {children}
        </button>
    );
}

const IconButton = ({ name, mode, onClick, className, style }) => {
    let modes = {

    }
    return (
        <button className={`icon-button-main-${mode} ${className}`} onClick={onClick} style={style} >
            <Icon
                name={name}
                style={style}
            />
        </button>
    );
}

const ButtonGrouper = ({ children, padding = '0px', className, style }) => {
    return (
        <Hstack
            control="center"
            padding={padding}
            style={{width: 'max-content', whiteSpace: 'nowrap', ...style}}
            className={className}
        >
            {React.Children.map(children, (child, index) => {
                const isFirst = index === 0;
                const isLast = index === React.Children.count(children) - 1;

                let className;
                if (isFirst) {
                    className = 'button-grouper-cap-start';
                } else if (isLast) {
                    className = 'button-grouper-cap-end';
                } else {
                    className = 'button-grouper-inner';
                }

                return React.cloneElement(child, {
                    className: `${className} ${child.props.className || ''}`.trim(),
                });
            })}
        </Hstack>
    );
}

export { Button, WideButton, IconButton, ButtonGrouper };