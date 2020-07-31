import React from 'react';
import './styles.css';

const Label = ({ children }) => <p style={{ color: 'green', fontSize: '1.5em', alignSelf: 'flex-start' }}>{children}</p>;
const Line = ({ children }) => <p style={{ fontStyle: 'italic', alignSelf: 'flex-end', marginBottom: '20px' }}>{children}</p>;
const Hr = () => <hr style={{ width: '100%', border: 'solid 1px green' }} />;

const Schedule = ({
    width = '500px',
    height = '300px',
    fontSize = '20px'
}) => {


    return (
        <div className="Schedule" style={{ width, height, fontSize }}>
            <Label>Martes a Viernes</Label>
            <Hr />
            <Line>De 20:00 a 24:00</Line>

            <Label>Sábados y Domingos</Label>
            <Hr />
            <Line>De 18:30 a 01:30</Line>

            <Label>Lunes</Label>
            <Hr />
            <Line>Cerrado</Line>
        </div>
    );
}

export default Schedule;