/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './Buttons/Buttons';
import './Styles/Styles'
import Link from './Link/Link'
import { Vstack, Hstack } from './Containers/Containers'
import { Header1, Header2, Header3, Header4, Header5, Header6 } from './Headers/Headers';


const root = ReactDOM.createRoot(document.getElementById('root'));

let testMode = 'affirmative';

root.render(
  <React.StrictMode>
    <Vstack
        control="left"
        padding="1rem"
    >
      <Header1
        mode="light serif black"
    >
      Item One
    </Header1>
    <Link 
    destination="https://amazon.com"
    mode="light mono thin"
    >
      Hello World
    </Link>
    <Button
      mode="destructive mono normal"
      onClick={() => console.log('Hello World')}
    >
      Hello World
    </Button>
    </Vstack>
  </React.StrictMode>
);
