import React from 'react';
import './styles.css';

import Title from '../../components/Title';
import { MenuListElement } from '../../components/ListElement';


export const MenuList = ({
    title = 'Menu List',
    menu = [],
    onElementClick = undefined,
    width = '25%',
    height = '300px'
}) => {

    return (
        <div className="MenuList" style={{ width, height }}>
            <Title textTransform='uppercase' fontSize='28px' margin='10px 0'>{title}</Title>

            <div className="list">
                {menu.map((m, key) => <MenuListElement key={key} {...m} onClick={onElementClick} />)}
{/* 
                {menu.map((m, key) => <MenuListElement key={key} {...m} onClick={onElementClick} />)}

                {menu.map((m, key) => <MenuListElement key={key} {...m} onClick={onElementClick} />)}

                {menu.map((m, key) => <MenuListElement key={key} {...m} onClick={onElementClick} />)} */}
            </div>
        </div>
    );
}