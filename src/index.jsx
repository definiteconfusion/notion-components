import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button, WideButton, ButtonGrouper, Hstack, Vstack, Image, Card } from './pack'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <Vstack
            control="start"
            padding="1rem"
        >
            <Hstack
                control="center"
                padding="0.25rem"
            >
                <Button mode="light" onClick={() => console.log("One")}>One</Button>
                <ButtonGrouper>
                    <Button mode="affirmative" onClick={() => console.log("Two")}>Two</Button>
                    <Button mode="constructive" onClick={() => console.log("Three")}>Three</Button>
                    <Button mode="destructive" onClick={() => console.log("Four")}>Four</Button>
                    <Button mode="midnight" onClick={() => console.log("Five")}>Five</Button>
                </ButtonGrouper>
                    <WideButton
                        edging="2rem"
                    >
                        Sign-in
                    </WideButton>
            </Hstack>
            <Card
                icon="https://via.placeholder.com/500"
                title="Title"
                price="£10"
                unit="per kilo"
                mode="dark"
                buttonTitle="Inspect: ⌘ + ⌥ + c"
            />
        </Vstack>
);