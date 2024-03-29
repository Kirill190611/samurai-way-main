import React from 'react';
import classes from './Navigation.module.css';
import {NavLink} from "react-router-dom";

export const Navigation = () => {
    return (
        <nav className={classes.navigation}>
            <ul className={classes.navigation__list}>
                <li>
                    <NavLink to="/profile"
                             className={({isActive}) => (isActive ? classes.active : classes.item)}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/dialogs"
                             className={({isActive}) => (isActive ? classes.active : classes.item)}>Messages</NavLink>
                </li>
                <li>
                    <NavLink to="/news"
                             className={({isActive}) => (isActive ? classes.active : classes.item)}>News</NavLink>
                </li>
                <li>
                    <NavLink to="/music"
                             className={({isActive}) => (isActive ? classes.active : classes.item)}>Music</NavLink>
                </li>
                <li>
                    <NavLink to="/settings"
                             className={({isActive}) => (isActive ? classes.active : classes.item)}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
};