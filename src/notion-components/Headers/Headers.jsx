import './Headers.css';
import React from 'react';

const Header1 = ({ children, mode, className }) => {
    return (
        <h1 className={`header-one-main back-${mode} ${className}`}>
            {children}
        </h1>
    );
}

const Header2 = ({ children, mode, className }) => {
    return (
        <h2 className={`header-two-main back-${mode} ${className}`}>
            {children}
        </h2>
    );
}

const Header3 = ({ children, mode, className }) => {
    return (
        <h3 className={`header-three-main back-${mode} ${className}`}>
            {children}
        </h3>
    );
}

const Header4 = ({ children, mode, className }) => {
    return (
        <h4 className={`header-four-main back-${mode} ${className}`}>
            {children}
        </h4>
    );
}

const Header5 = ({ children, mode, className }) => {
    return (
        <h5 className={`header-five-main back-${mode} ${className}`}>
            {children}
        </h5>
    );
}

const Header6 = ({ children, mode, className }) => {
    return (
        <h6 className={`header-six-main back-${mode} ${className}`}>
            {children}
        </h6>
    );
}

export { Header1, Header2, Header3, Header4, Header5, Header6 };