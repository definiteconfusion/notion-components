import './Buttons.css';

const Button = ({ children, mode, onClick }) => {
    return (
        <button className={`button-main ${mode}`} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;