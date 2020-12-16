import React from 'react';
import s from './Header.module.css'
import blueLogo from '../../assets/image/blueLogo.png'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <img className={s.logo} src={blueLogo} alt={"blue logo"}/>
            </div>
        </header>
    );
};

export default Header;
