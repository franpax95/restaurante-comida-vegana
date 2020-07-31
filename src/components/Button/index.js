import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';

const Button = ({
    height = '50px',
    width = '120px',
    fontSize = '20px',
    type = 'button',
    to = '',
    onClick = undefined,
    children
}) => {
    
    const renderLink = () => <Link className="Button" to={to} style={{
        height, width, fontSize
    }}>{children}</Link>;

    const renderButton = () => <button className="Button" onClick={onClick} style={{
        height, width, fontSize
    }}>{children}</button>;

    return (type === 'link') ? renderLink() : renderButton();
}

export default Button;