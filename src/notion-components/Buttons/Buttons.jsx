import './Buttons.css';
import { Hstack } from '../Containers/Containers';
import React from 'react';


const Button = ({ children, mode, onClick, className, style }) => {
    return (
        <button className={`button-main ${mode} ${className}`} onClick={onClick} style={style} >
            {children}
        </button>
    );
}

const ButtonGrouper = ({ children, className, style }) => {
    return (
        <Hstack
            control="center"
            padding="0px"
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

export { Button, ButtonGrouper };