import React from 'react';
import classes from './Navigation.module.css';

export const Navigation = () => {
    return (
        <nav className={classes.navigation}>
            <ul className={classes.navigation__list}>
                <li className={classes.item}>
                    <a href="/profile">Profile</a>
                </li>
                <li className={`${classes.item} ${classes.active}`}>
                    <a href="/dialogs">Messages</a>
                </li>
                <li className={classes.item}>
                    <a href="/news">News</a>
                </li>
                <li className={classes.item}>
                    <a href="/music">Music</a>
                </li>
                <li className={classes.item}>
                    <a href="/settings">Settings</a>
                </li>
            </ul>
        </nav>
    );
};