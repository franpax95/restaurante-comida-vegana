import React, { useState, useEffect } from 'react';
import './Home.css';
import menu from '../../menu.json';

import { useInnerWidth } from '../../hooks/useInnerWidth';

import Title from '../../components/Title';
import MenuCard from '../../components/MenuCard';
import Schedule from '../../components/Schedule';

const LIMIT = 160;
const extract = msg => msg.substr(0, LIMIT);

const Home = () => {
    const width = useInnerWidth();

    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    const [third, setThird] = useState(0);

    useEffect(() => {
        for(let i=0; i < 3; i++){
            const index = Math.floor((Math.random() * menu.length));
            if(i === 0) setFirst(menu[index]);
            if(i === 1) setSecond(menu[index]);
            if(i === 2) setThird(menu[index]);
        }
    }, []);

    return (
        <div className="Home">
            <Title textTransform='uppercase' fontSize = '38px' margin='50px 0'>
                Lorem ipsum dolor sit amet
            </Title>

            <div className="menu-card-box">
                <MenuCard to={`/menu/${first.id}`} width='300px' height='450px' src={first.src}>
                    {(first !== 0)
                        ? `${extract(first.description)}...`
                        : ''
                    }
                </MenuCard>
                <MenuCard to={`/menu/${second.id}`} width='300px' height='450px' src={second.src}>
                    {(second !== 0)
                        ? `${extract(second.description)}...`
                        : ''
                    }
                </MenuCard>
                <MenuCard to={`/menu/${third.id}`} width='300px' height='450px' src={third.src}>
                    {(third !== 0)
                        ? `${extract(third.description)}...`
                        : ''
                    }
                </MenuCard>
            </div>

            <div className="schedule-section" style={{ height: '500px' }}>
                <Schedule 
                    width={(width > 800) ? '800px' : '300px'} 
                    height={(width > 800) ? '350px' : '200px'}
                    fontSize={(width > 800) ? '20px' : '12px'}
                />
            </div>

            <div className="location-section">
                <div style={{
                    minWidth: '40vw',
                    minHeight: '40vh',
                    backgroundColor: 'whitesmoke',
                    border: 'solid 1px gray'
                }}><code>Google Maps</code></div>
            </div>
        </div>
    );
}

export default Home;