import './Spinner.css';
import spinnerLight from './Spinner-Icon-Light.png';
import spinnerDark from './Spinner-Icon-Dark.png';

const Spinner = ({ mode }) => {
    let modeColors = {
        light: {
            "src": spinnerLight,
        },
        dark: {
            "src": spinnerDark,
        }
    };
        return (
            <img src={modeColors[mode].src} className="spinner" />
        );
}

export { Spinner };