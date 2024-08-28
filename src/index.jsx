import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button, ButtonGrouper } from './pack'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <ButtonGrouper>
            <Button mode="affirmative" onClick={() => console.log("One")}>One</Button>
            <Button mode="dark" onClick={() => console.log("Two")}>Two</Button>
            <Button mode="destructive" onClick={() => console.log("Three")}>Three</Button>
        </ButtonGrouper>
    </div>
);