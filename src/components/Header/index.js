import React from 'react';
import './styles.css';

const Header = ({
    width = '100%',
    height = '40%',
    title = 'Header',
    src = '/header.jpg',
    children
}) => (
    <div className="Header" style={{ width, height, backgroundImage: `url(${src})` }}>
        <h1 className="title">{title}</h1>
        {children}
    </div>
)

export default Header;