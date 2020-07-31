import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';
import Button from '../Button';

const MenuCard = ({
    width = '200px',
    height = '400px',
    to = '/',
    src = '/Menu/img1.jpg',
    children 
}) => {


    return (
        <div className="MenuCard" style={{ width, minWidth: width, height, minHeight: height }}>
            <Link className="image" to={to}>
                <img src={src} alt='MenuCard' />
            </Link>

            <div className="description">
                {children}
            </div>

            <div className="buttons">
                <Button
                    type = 'link'
                    to = {to}
                    width = '80%'
                >Echar un vistazo</Button>
            </div>
        </div>
    );
}

export default MenuCard;