import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogsProps = {

}

export const Dialogs = (props: DialogsProps) => {
    return (
        <div className={classes.dialogs}>
            <h3>My dialogs</h3>
            <div className={classes.dialogs_container}>
                <ul className={classes.dialogs_list}>
                    <li>
                        <NavLink to="/dialogs/1"
                                 className={({isActive}) => (isActive ? `${classes.dialogs_user_active} + ${classes.dialogs_user}` : classes.dialogs_user)}>
                            <div>Avatar</div>
                            <div>Name</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs/2"
                                 className={({isActive}) => (isActive ? `${classes.dialogs_user_active} + ${classes.dialogs_user}` : classes.dialogs_user)}>
                            <div>Avatar</div>
                            <div>Name</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs/3"
                                 className={({isActive}) => (isActive ? `${classes.dialogs_user_active} + ${classes.dialogs_user}` : classes.dialogs_user)}>
                            <div>Avatar</div>
                            <div>Name</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs/4"
                                 className={({isActive}) => (isActive ? `${classes.dialogs_user_active} + ${classes.dialogs_user}` : classes.dialogs_user)}>
                            <div>Avatar</div>
                            <div>Name</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs/5"
                                 className={({isActive}) => (isActive ? `${classes.dialogs_user_active} + ${classes.dialogs_user}` : classes.dialogs_user)}>
                            <div>Avatar</div>
                            <div>Name</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs/6"
                                 className={({isActive}) => (isActive ? `${classes.dialogs_user_active} + ${classes.dialogs_user}` : classes.dialogs_user)}>
                            <div>Avatar</div>
                            <div>Name</div>
                        </NavLink>
                    </li>
                </ul>
                <ul className={classes.dialogs_messages}>
                    <li className={classes.dialogs_message}>
                        Message
                    </li>
                    <li className={classes.dialogs_message}>
                        Message
                    </li>
                    <li className={classes.dialogs_message}>
                    Message
                    </li>
                    <li className={classes.dialogs_message}>
                        Message
                    </li>
                    <li className={classes.dialogs_message}>
                        Message
                    </li>
                    <li className={classes.dialogs_message}>
                        Message
                    </li>
                </ul>
            </div>
        </div>
    );
};