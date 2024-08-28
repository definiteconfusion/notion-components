import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button, ButtonGrouper, Hstack } from './pack'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <Hstack
            control="center"
            padding="0.25rem"
        >
            <Button mode="light" onClick={() => console.log("One")}>One</Button>
            <ButtonGrouper>
                <Button mode="affirmative" onClick={() => console.log("Two")}>Two</Button>
                <Button mode="constructive" onClick={() => console.log("Three")}>Three</Button>
                <Button mode="destructive" onClick={() => console.log("Four")}>Four</Button>
            </ButtonGrouper>
        </Hstack>
);