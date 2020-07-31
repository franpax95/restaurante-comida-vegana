import React from 'react';
import './styles.css';
import { TiCog } from 'react-icons/ti';

const ContactCard = ({
    title = 'ContactCard',
    body = 'Description of ContactCard',
    icon = <TiCog />,
    width = '300px',
    height = '200px'
}) => {


    return (
        <div className="ContactCard" style={{ width, height }}>
            <div className="title">{title}</div>
            <div className="body">{body}</div>
            <div className="icon">{icon}</div>
        </div>
    );
}

export default ContactCard;