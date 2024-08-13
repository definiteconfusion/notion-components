import './Buttons.css';

const Button = ({ children, mode, onClick, className }) => {
    return (
        <button className={`button-main ${mode} ${className}`} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;