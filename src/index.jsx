import React from 'react';
import ReactDOM from 'react-dom/client';
import { Fallback, Table, Code, WrappedCode, Button, WideButton, ButtonGrouper, Hstack, Vstack, Image, Card, ToolTip, div } from './pack'


let CurrentMode = "dark";


let bodyColor = {"dark":"#1E1E1E","light":"#fff"}; let base = document.getElementById('root'); base.style = "background-color: " + bodyColor[CurrentMode] + "; color: " + bodyColor[CurrentMode] + ";display: flex; justify-content:center; align-items:center; min-height:100vH; transition-duration: 0.1s; font-family:ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI Variable Display', 'Segoe UI', Helvetica, 'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol'; padding: 5rem;";
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
                <Button mode={CurrentMode} onClick={() => console.log("One")}>One</Button>
                <ButtonGrouper>
                    <Button mode="affirmative" onClick={() => console.log("Two")}>Two</Button>
                    <Button mode="constructive" onClick={() => console.log("Three")}>Three</Button>
                    <Button mode="destructive" onClick={() => console.log("Four")}>Four</Button>
                    <Button mode="midnight" onClick={() => console.log("Five")}>Five</Button>
                </ButtonGrouper>
                    <ToolTip
                        label="Sign-in"
                        mode={CurrentMode}
                    >
                        <WideButton
                            edging="2rem"
                        >
                            Sign-in
                        </WideButton>
                    </ToolTip>
            </Hstack>
            <Card
    icon="https://via.placeholder.com/2000"
    title="Title"
    price="10"
    currency="£"
    unit="per kilo"
    mode={CurrentMode}
>
    <Button mode="affirmative" onClick={() => console.log("Two")}>Add to Cart</Button>
    <Button mode="dark" onClick={() => console.log("Three")}>Details</Button>
</Card>
            <WrappedCode 
                language="js"
                mode={CurrentMode}
            >
            {`import { Card, Button, Header1 } from 'notion-components-react';

export default function App() {
    return (
        <>
            <Header1
                mode="midnight mono black"
            >Welcome to Notion Components</Header1>
            <Card
                icon="https://via.placeholder.com/500"
                title="Title"
                price="10"
                currency="£"
                unit="per kilo"
            >
                <Button mode="affirmative" onClick={() => console.log("Two")}>Add to Cart</Button>
                <Button mode="dark" onClick={() => console.log("Three")}>Details</Button>
            </Card>
        </>
    );
}
            `}
            </WrappedCode>
            <div
                mode={CurrentMode}
            />
            <Table 
                data={[{ id: 1, name: 'John Doe', age: 28, occupation: 'Engineer' },{ id: 2, name: 'Jane Smith', age: 34, occupation: 'Designer' },{ id: 3, name: 'Sam Brown', age: 23, occupation: 'Developer' },]}
                mode={CurrentMode}
                />
        </Vstack>
);