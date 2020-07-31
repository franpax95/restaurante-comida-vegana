import React from 'react';
import './styles.css';

import Title from '../../components/Title';


const MenuInfo = ({
    id = 0,
    name = 'Nombre',
    description = 'Descripción',
    price = '00,00€',
    src = '/Menu/img1.jpg',
    width = '100%',
    height = '600px'
}) => {
    return (
        <div className="MenuInfo" style={{ width, height }}>
            <Title textTransform='uppercase' fontSize='28px' textAlign='left' margin='10px 0'>{name}</Title>

            <div className="image">
                <img src={src} alt={name} />
            </div>

            <div className="description">
                {description}
            </div>

            <div className="price">
                {price}
            </div>
        </div>
    );
}

export default MenuInfo;