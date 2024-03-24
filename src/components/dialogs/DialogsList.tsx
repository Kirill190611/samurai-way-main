import React from 'react';
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type UsersProps = {
    id: number
    name: string
    avatar: string
}

type DialogsList = {
    users: Array<UsersProps>
}
export const DialogsList = ({users}: DialogsList) => {
    return (
        <ul className={classes.dialogs_list}>

            {users.map((u => {
                return (
                    <li>
                        <NavLink to={`/dialogs/${u.id}`}
                                 className={({isActive}) => (isActive ? `${classes.dialogs_user_active} + ${classes.dialogs_user}` : classes.dialogs_user)}>
                            <div>{u.avatar}</div>
                            <div>{u.name}</div>
                        </NavLink>
                    </li>
                )
            }))}

        </ul>
    );
};