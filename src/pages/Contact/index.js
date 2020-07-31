import React from 'react';
import './Contact.css';

import { useInnerWidth } from '../../hooks/useInnerWidth';

import Title from '../../components/Title';
import ContactCard from '../../components/ContactCard';

import { FaWhatsapp } from 'react-icons/fa';
import { MdMail, MdLocationOn, MdLocalPhone } from 'react-icons/md';

const Contact  = (props) => {
    const width = useInnerWidth();

    return (
        <div className="Contact">
            <Title textTransform='uppercase' fontSize = '38px' margin='50px 0'>
                Contacto
            </Title>

            <div className="content">
                <ContactCard 
                    width = '250px'
                    height = '220px'
                    title = 'Dirección'
                    body = {<>C/Neque porro quisquam, 55<br />Andalucía, España</>}
                    icon = {<MdLocationOn />}
                />

                <ContactCard 
                    width = '250px'
                    height = '220px'
                    title = 'Email'
                    body = 'email@prueba.com'
                    icon = {<MdMail />}
                />

                <ContactCard 
                    width = '250px'
                    height = '220px'
                    title = 'Teléfono'
                    body = '(+34) 123 456 678'
                    icon = {<MdLocalPhone />}
                />

                <ContactCard 
                    width = '250px'
                    height = '220px'
                    title = 'WhatsApp'
                    body = '(+34) 987 654 321'
                    icon = {<FaWhatsapp />}
                />
            </div>
        </div>
    );
}

export default Contact;