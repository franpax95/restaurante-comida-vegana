import React from 'react';
import './styles.css';

const Title = ({
    margin = '0',
    color = 'initial',
    fontSize = '48px',
    textAlign = 'center',
    textTransform = 'initial',
    children
}) => <h1 className="Title" style={{
    margin, 
    color,
    fontSize,
    textAlign,
    textTransform
}}>{children}</h1>;

export default Title;