import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './Buttons/Buttons';
import './Styles/Styles'
import { Vstack, Hstack } from './Containers/Containers'
import { Header1, Header2, Header3, Header4, Header5, Header6 } from './Headers/Headers';

const root = ReactDOM.createRoot(document.getElementById('root'));

let testMode = 'affirmative';

root.render(
  <React.StrictMode>
    <Vstack
        control="center"
        padding="1rem"
    >
      <Header1
        mode="light"
    >
      Item One
    </Header1>
    <Header1
        mode="affirmative"
    >
      Item Two
    </Header1>
    </Vstack>
  </React.StrictMode>
);
