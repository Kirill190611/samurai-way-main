import React from 'react';
import classes from './Header.module.css';

export const Header = () => {
    return (
        <header className={classes.header}>
            <img src="https://www.vhv.rs/dpng/d/476-4764006_your-logo-here-circle-hd-png-download.png"
                 alt="Logo"/>
        </header>
    );
};