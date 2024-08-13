/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import './Card.css';
import { Vstack, Hstack } from '../Containers/Containers';
import Button from '../Buttons/Buttons';
import { Header1, Header2, Header3, Header4, Header5, Header6 } from '../Headers/Headers';
import Image from '../Image/Image';

const Card = ({ icon, title, price, unit, currency, buttonTitle, buttonOnClick }) => {
    return (
        <div className="card-main">
            <div className="card-content-container">
                <Vstack
                    control="start"
                    padding="0.5rem"
                >
                    <Image 
                    src={icon}
                    width="9rem"
                    height="auto"
                    borderRad="5%"
                    />
                    <Header3 mode="light card-title">{title}</Header3>
                    <Hstack
                        control="end"
                    >
                        <p className="card-price">{currency}{price}</p>
                        <p className="card-unit">{unit}</p>
                    </Hstack>
                    <Button
                        mode="light"
                        onClick={buttonOnClick}
                    >
                    {buttonTitle}
                    </Button>
                </Vstack>
            </div>
        </div>
    )
}

export default Card