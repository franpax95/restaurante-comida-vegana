import React from 'react';
import './styles.css';

import { NavLink } from 'react-router-dom';

const Navbar = ({ 
    src = '/navbar.jpg',
    width = '100%',
    height = '40vh'
}) => {


    return (
        <div className="Navbar" style={{ width, height }}>
            <div className="bar">
                <NavLink to='/' activeClassName='active'>Inicio</NavLink>
                <NavLink to='/about' activeClassName='active'>Sobre nosotros</NavLink>
                <NavLink to='/menu' activeClassName='active'>Nuestro menú</NavLink>
                <NavLink to='/contact' activeClassName='active'>Contacto</NavLink>
            </div>

            <div className="image">
                <img src={src} alt='Navbar' />
            </div>
        </div>
    );
}

export default Navbar;