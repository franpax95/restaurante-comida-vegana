import React, { useState } from 'react';
import './Menu.css';
import menu from '../../menu.json';

import { useInnerWidth } from '../../hooks/useInnerWidth';
import { useTransition, animated } from 'react-spring';

import Title from '../../components/Title';
import { MenuList } from '../../components/List';
import MenuInfo from '../../components/MenuInfo';

const RelativeWrapper = ({ height, width, children }) => <div style={{
    position: 'relative',
    width,
    height
}}>{children}</div>;

const getMenuElemById = (id, menu) => menu.filter(m => id === m.id)[0];

const getResponsiveWidth = width => {
    if(width > 1000) return 300;
    if(width < 1000 && width > 600) return 250;
    if(width < 600) return 200;
}

const getResponsiveHeight = width => {
    if(width > 1000) return 600;
    if(width < 1000 && width > 600) return 350;
    if(width < 600) return 250;
}

const Menu = (props) => {
    const width = useInnerWidth();

    const [current, setCurrent] = useState(
        (props.match.params.id) ? Number(props.match.params.id) : 1
    );
    
    const transitions = useTransition(current, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        to: { opacity: 0 },
        leave: { opacity: 0 },
        reset: true,
        unique: true
    });

    return (
        <div className="Menu">
            <Title textTransform='uppercase' fontSize='38px' margin='50px 0'>
                Nuestro Menú
            </Title>

            <div className="content">
                <MenuList 
                    menu = {menu.filter(m => m.category === "primeros")}
                    title = 'Nuestros primeros'
                    onElementClick = {setCurrent}
                    width = {`${getResponsiveWidth(width)}px`}
                    height = {`${getResponsiveHeight(width)}px`}
                />

                <MenuList 
                    menu = {menu.filter(m => m.category === "segundos")}
                    title = 'Nuestros segundos'
                    onElementClick = {setCurrent}
                    width = {`${getResponsiveWidth(width)}px`}
                    height = {`${getResponsiveHeight(width)}px`}
                />

                <RelativeWrapper width={`${getResponsiveWidth(width) * 2}px`} height={`${getResponsiveHeight(width)}px`}>
                    {transitions.map(({ item, key, props }) => item && <animated.div key={key} style={{
                        ...props, 
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: '0',
                        left: '0'
                    }}>
                        <MenuInfo
                            {...getMenuElemById(item, menu)}
                            height = '100%'
                            width = '100%'
                        />
                    </animated.div>)}
                </RelativeWrapper>
            </div>
        </div>
    );
}

export default Menu;