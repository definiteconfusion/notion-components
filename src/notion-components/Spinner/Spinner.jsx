import './Spinner.css';
import spinnerLight from './Spinner-Icon-Light.png';
import spinnerDark from './Spinner-Icon-Dark.png';
import spinnerGitHubMona from './Spinner-Icon-GitHub-Mona.gif';
import notionAi from './Spinner-Icon-NotionAI.gif';
import React from 'react';

const Spinner = ({ mode }) => {
    let modeColors = {
        light: {
            "src": spinnerDark,
            "class": "spinner"
        },
        dark: {
            "src": spinnerLight,
            "class": "spinner"
        },
        gitHubMona: {
            "src": spinnerGitHubMona,
            "class": "spinner-github-mona"
        },
        notionAi: {
            "src": notionAi,
            "class": "spinner-github-mona"
        }
    };
        return (
            <img src={modeColors[mode].src} className={modeColors[mode].class} />
        );
}

export { Spinner };