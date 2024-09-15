import React from 'react';
import ReactDOM from 'react-dom/client';
import { Code, WrappedCode, Button, WideButton, ButtonGrouper, Hstack, Vstack, Image, Card, ToolTip, Spinner } from './pack'


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
                <Button mode="dark" onClick={() => console.log("One")}>One</Button>
                <ButtonGrouper>
                    <Button mode="affirmative" onClick={() => console.log("Two")}>Two</Button>
                    <Button mode="constructive" onClick={() => console.log("Three")}>Three</Button>
                    <Button mode="destructive" onClick={() => console.log("Four")}>Four</Button>
                    <Button mode="midnight" onClick={() => console.log("Five")}>Five</Button>
                </ButtonGrouper>
                    <ToolTip
                        label="Sign-in"
                    >
                        <WideButton
                            edging="2rem"
                        >
                            Sign-in
                        </WideButton>
                    </ToolTip>
            </Hstack>
            <Card
    icon="https://via.placeholder.com/500"
    title="Title"
    price="10"
    currency="£"
    unit="per kilo"
    mode="dark"
>
    <Button mode="affirmative" onClick={() => console.log("Two")}>Add to Cart</Button>
    <Button mode="dark" onClick={() => console.log("Three")}>Details</Button>
</Card>
            <WrappedCode 
                language="py"
                mode="dark"
            >
            {`# Hello World
def hello_world():
            print('Hello, world!')
}
            `}
            </WrappedCode>
            <Spinner
                mode="light"
            />
        </Vstack>
);