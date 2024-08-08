import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './Buttons/Buttons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Button
    mode="affirmative"
    onClick={() => {console.log('Hello World')}}
    >
      Continue
    </Button>
  </React.StrictMode>
);
