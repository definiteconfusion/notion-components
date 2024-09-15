import './Spinner.css';
import spinnerLight from './Spinner-Icon-Light.png';
import spinnerDark from './Spinner-Icon-Dark.png';
import spinnerGitHubMona from './Spinner-Icon-GitHub-Mona.gif';

const Spinner = ({ mode }) => {
    let modeColors = {
        light: {
            "src": spinnerLight,
            "class": "spinner"
        },
        dark: {
            "src": spinnerDark,
            "class": "spinner"
        },
        gitHubMona: {
            "src": spinnerGitHubMona,
            "class": "spinner-github-mona"
        }
    };
        return (
            <img src={modeColors[mode].src} className={modeColors[mode].class} />
        );
}

export { Spinner };