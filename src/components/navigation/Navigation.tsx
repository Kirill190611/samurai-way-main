import React from 'react';
import classes from './Navigation.module.css';

export const Navigation = () => {
    return (
        <nav className={classes.navigation}>
            <ul className={classes.navigation__list}>
                <li className={classes.item}>
                    <a href="#">Profile</a>
                </li>
                <li className={classes.item}>
                    <a href="#">Messages</a>
                </li>
                <li className={classes.item}>
                    <a href="#">News</a>
                </li>
                <li className={classes.item}>
                    <a href="#">Music</a>
                </li>
                <li className={classes.item}>
                    <a href="#">Settings</a>
                </li>
            </ul>
        </nav>
    );
};