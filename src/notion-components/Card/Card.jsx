/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import './Card.css';
import { Vstack, Hstack } from '../Containers/Containers';
import { Button } from '../Buttons/Buttons';
import { Header1, Header2, Header3, Header4, Header5, Header6 } from '../Headers/Headers';
import { Image } from '../Image/Image';
import React from 'react';


const Card = ({ children, icon, title, price, unit, currency, buttonTitle, buttonOnClick, mode }) => {

    let buttonColorKeys = {
        "light":"midnight",
        "dark":"light"
    }

    return (
        <div className={`card-main-${mode}`}>
            <div className="card-content-container">
                <Vstack
                    control="start"
                    padding="0.5rem"
                >
                    <Image 
                    src={icon}
                    height="9rem"
                    width="auto"
                    borderRad="5%"
                    />
                    <Hstack
                        control="center"
                        padding="0.5rem"
                    >
                        <Header3 mode={`${mode} card-title-${mode}`}>{title}</Header3>
                        {children}
                    </Hstack>
                    <Hstack
                        control="end"
                    >
                        <p className={`card-price-${mode}`}>{currency}{price}</p>
                        <p className={`card-unit-${mode}`}>{unit}</p>
                    </Hstack>
                    <Button
                        mode={buttonColorKeys[mode]}
                        onClick={buttonOnClick}
                    >
                    {buttonTitle}
                    </Button>
                </Vstack>
            </div>
        </div>
    )
}

export { Card };