import './Headers.css';

const Header1 = ({ children, mode }) => {
    return (
        <h1 className={`header-one-main back-${mode}`}>
            {children}
        </h1>
    );
}

const Header2 = ({ children, mode }) => {
    return (
        <h2 className={`header-two-main back-${mode}`}>
            {children}
        </h2>
    );
}

const Header3 = ({ children, mode }) => {
    return (
        <h3 className={`header-three-main back-${mode}`}>
            {children}
        </h3>
    );
}

const Header4 = ({ children, mode }) => {
    return (
        <h4 className={`header-four-main back-${mode}`}>
            {children}
        </h4>
    );
}

const Header5 = ({ children, mode }) => {
    return (
        <h5 className={`header-five-main back-${mode}`}>
            {children}
        </h5>
    );
}

const Header6 = ({ children, mode }) => {
    return (
        <h6 className={`header-six-main back-${mode}`}>
            {children}
        </h6>
    );
}

export { Header1, Header2, Header3, Header4, Header5, Header6 };