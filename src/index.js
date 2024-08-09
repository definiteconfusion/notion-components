import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './Buttons/Buttons';
import { Header1, Header2, Header3, Header4, Header5, Header6 } from './Headers/Headers';

const root = ReactDOM.createRoot(document.getElementById('root'));

let testMode = 'light';

root.render(
  <React.StrictMode>
    <Header1
      mode={testMode}
    >
      Hello World
    </Header1>
    <Header2
      mode={testMode}
    >
      Hello World
    </Header2>
    <Header3
      mode={testMode}
    >
      Hello World
    </Header3>
    <Header4
      mode={testMode}
    >
      Hello World
    </Header4>
    <Header5
      mode={testMode}
    >
      Hello World
    </Header5>
    <Header6
      mode={testMode}
    >
      Hello World
    </Header6>
    <Button
      mode={testMode}
      onClick={() => console.log('Button clicked')}
      >
        Click me
    </Button>
  </React.StrictMode>
);
