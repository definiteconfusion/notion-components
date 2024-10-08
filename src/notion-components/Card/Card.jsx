/* eslint-disable no-unused-vars */
import './Card.css';
import { Vstack, Hstack } from '../Containers/Containers';
import { Button } from '../Buttons/Buttons';
import { Header3 } from '../Headers/Headers';
import { Image } from '../Image/Image';
import React from 'react';


const Card = ({ children, icon, title, price, unit, currency, tags, mode, style }) => {

    return (
        <div className={`card-main-${mode}`} style={style} >
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
                        {tags}
                    </Hstack>
                    <Hstack
                        control="end"
                    >
                        <p className={`card-price-${mode}`}>{currency}{price}</p>
                        <p className={`card-unit-${mode}`}>{unit}</p>
                    </Hstack>
                    <Hstack
                        control="center"
                        padding="0.5rem"
                    >
                        {children}
                    </Hstack>
                </Vstack>
            </div>
        </div>
    )
}

export { Card };