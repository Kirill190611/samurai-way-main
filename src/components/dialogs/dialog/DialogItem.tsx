// @flow
import * as React from 'react';
import {NavLink} from "react-router-dom";
import classes from "../Dialogs.module.css";
import {UsersProps} from "../../../redux/State";

export const DialogItem = ({
                               id,
                               avatar,
                               name
                           }: UsersProps) => {
    return (
        <li>
            <NavLink to={`/dialogs/${id}`}
                     className={({isActive}) => (isActive
                         ? `${classes.dialogs_user_active} + ${classes.dialogs_user}`
                         : classes.dialogs_user)}>
                <div>{avatar}</div>
                <div>{name}</div>
            </NavLink>
        </li>
    );
};