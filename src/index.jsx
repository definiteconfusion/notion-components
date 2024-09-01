import React from 'react';
import ReactDOM from 'react-dom/client';
import { Code, WrappedCode, Button, WideButton, ButtonGrouper, Hstack, Vstack, Image, Card } from './pack'


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
            >
                <Button mode="affirmative" onClick={() => console.log("Two")}>Two</Button>
                {/* <Button mode="constructive" onClick={() => console.log("Three")}>Three</Button> */}
            </Card>
            <WrappedCode language="py">
            {`import random
import string

class database:
    @staticmethod
    def userVett(self, userName:str="NaN", passkey:str="NaN"):
        try:
            key = utils.sqlite.command(self, f"SELECT passkey FROM users WHERE userName = '{userName}'")[0][0]
            if key == passkey:
                return True
            else:
                return False
        except:
            return False

def error(type:int):
    errors = {
        401: {"401": "Unauthorized"},
        500: {"500": "Internal Server Error"},
        200: {"200": "Success"}
    }
    return errors[type]
            `}
            </WrappedCode>
        </Vstack>
);