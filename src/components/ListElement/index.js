import React from 'react';
import './styles.css';

import Img from 'react-cool-img';
import Spinner from '../Spinner';



export const MenuListElement = ({
    id = 0,
    name = 'Menu List Element',
    description = 'Menu List Description',
    price = '10€',
    src = '/Menu/img1.jpg',
    onClick = (id) => console.log(id)
}) => {
    const LIMIT = 80;
    const extract = msg => msg.substr(0, LIMIT);

    return (
        <button className="MenuListElement" onClick={() => onClick(id)}>
            <div className="image">
                <Img src={src} alt={name} placeholder='/spinner.svg' />
            </div>

            <div className="info">
                <p className="name">
                    {name}
                </p>
                <p className="description">
                    {(description.length > LIMIT)
                        ? `${extract(description)}...`
                        : description
                    }
                </p>
                <p className="price">{`Por sólo ${price}`}</p>
            </div>
        </button>
    );
}