/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './Buttons/Buttons';
import './Styles/Styles'
import Link from './Link/Link'
import Image from './Image/Image'
import { Vstack, Hstack } from './Containers/Containers'
import { Header1, Header2, Header3, Header4, Header5, Header6 } from './Headers/Headers';
import { Itag } from './Tag/Tag';

const root = ReactDOM.createRoot(document.getElementById('root'));

let testMode = 'affirmative';

root.render(
  <React.StrictMode>
    <Vstack
        control="center"
        padding="1rem"
    >
      <Hstack
        control="center"
        padding="0.1rem"
      >
        <Header1
          mode="light serif thin"
        >
          Item One
        </Header1>
        <Itag
          title="Popular"
          mode="affirmative"
        />
      </Hstack>
      <Link 
      destination="https://jakerase.dev"
      mode="light mono thin"
      >
        <Image
        src="https://via.placeholder.com/150"
        width="150px"
        height="150px"
        alt="Placeholder"
        borderRad="50%"
      />
      </Link>

      <Hstack
        control="center"
        padding="1rem"
      >
        <Link
        destination="https://jakerase.dev"
      >
          <Button
          mode="affirmative mono normal"
          onClick={() => console.log('Hello World')}
          >
          Hello World
        </Button>
      </Link>

      <Button
        mode="destructive mono normal"
        onClick={() => console.log('Hello World')}
      >
        Hello World
      </Button>
      </Hstack>
    </Vstack>
  </React.StrictMode>
);
