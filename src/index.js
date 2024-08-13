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
import Card from './Card/Card'

const root = ReactDOM.createRoot(document.getElementById('root'));

let testMode = 'affirmative';

root.render(
  <React.StrictMode>
    <Hstack
      control="center"
      padding="1rem"
    >
      <Card
        icon="https://via.placeholder.com/500"
        title="Title"
        price="£10"
        unit="per kilo"
        buttonTitle="Inspect: ⌘ + ⌥ + c"
        buttonOnClick={() => console.log('Button Clicked')}
      />
    </Hstack>
  </React.StrictMode>
);
