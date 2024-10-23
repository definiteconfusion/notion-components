import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Spinner, InlineCode, Icon, Tag, IconButton, Toggle, Fallback, Table, Code, WrappedCode, Button, WideButton, ButtonGrouper, Hstack, Vstack, Image, Card, ToolTip, div } from './pack';

const App = () => {
    const [currentMode, setCurrentMode] = useState("light");
    const toggleLabel = currentMode === "light" ? "Dark" : "Light";
    const bodyColor = { "dark": "#202020", "light": "#fff" };
    const base = document.getElementById('root');
    base.style = `background-color: ${bodyColor[currentMode]}; color: ${bodyColor[currentMode]}; display: flex; justify-content:center; align-items:center; min-height:100vH; transition-duration: 0.1s; font-family:ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI Variable Display', 'Segoe UI', Helvetica, 'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol'; padding: 5rem;`;

    const toggleMode = () => {
        const newMode = currentMode === "light" ? "dark" : "light";
        setCurrentMode(newMode);
        base.style = `background-color: ${bodyColor[newMode]}; color: ${bodyColor[newMode]}; display: flex; justify-content:center; align-items:center; min-height:100vH; transition-duration: 0.1s; font-family:ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI Variable Display', 'Segoe UI', Helvetica, 'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol'; padding: 5rem;`;
    };

    return (
        <Vstack control="start" padding="1rem">
            <ToolTip label="Theme" mode={currentMode}>
                <Toggle
                    onChange={(checked) => {
                        console.log(toggleLabel);
                        toggleMode();
                    }}
                    mode={currentMode}
                />
            </ToolTip>
            <Hstack padding="0.25rem">
                <ToolTip label="Adjustments" mode={currentMode}>
                    <IconButton name="adjustments-horizontal" mode={currentMode} onClick={() => console.log("Adjustments")} />
                </ToolTip>
                <IconButton name="ambulance" mode={currentMode} onClick={() => console.log("Ambulance")} />
            </Hstack>
            <Hstack control="center" padding="0.25rem">
                <Button mode={currentMode} onClick={() => console.log("One")}>One</Button>
                <ButtonGrouper>
                    <Button mode="affirmative" onClick={() => console.log("Two")}>Two</Button>
                    <Button mode="constructive" onClick={() => console.log("Three")}>Three</Button>
                    <Button mode="destructive" onClick={() => console.log("Four")}>Four</Button>
                    <Button mode="midnight" onClick={() => console.log("Five")}>Five</Button>
                </ButtonGrouper>
                <ToolTip label="Sign-in" mode={currentMode}>
                    <WideButton edging="2rem" mode={currentMode}>
                        Sign-in
                    </WideButton>
                </ToolTip>
            </Hstack>
            <InlineCode
                mode={currentMode}
            >
                print("Hello, World!")
            </InlineCode>
            <Spinner mode="gitHubMona" />
            <Card
                icon="https://www.vtpestcontrol.com/wp-content/uploads/2019/04/honey-bee.jpg"
                title="Title"
                price="10"
                currency="£"
                unit="per kilo"
                mode={currentMode}
                tags={<Tag mode="affirmative" title="New" />}
            >
                <Button mode="affirmative" onClick={() => console.log("Two")}>Add to Cart</Button>
                <Button mode={currentMode} onClick={() => console.log("Three")}>Details</Button>
            </Card>
            <WrappedCode language="js" mode={currentMode}>
                {`import { Card, Button, Header1 } from 'notion-components-react';

export default function App() {
    return (
        <>
            <Header1 mode="midnight mono black">Welcome to Notion Components</Header1>
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
            <div mode={currentMode} />
            <Table
                data={[
                    { id: 1, name: 'John Doe', age: 28, occupation: 'Engineer' },
                    { id: 2, name: 'Jane Smith', age: 34, occupation: 'Designer' },
                    { id: 3, name: 'Sam Brown', age: 23, occupation: 'Developer' },
                ]}
                mode={currentMode}
            />
        </Vstack>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
