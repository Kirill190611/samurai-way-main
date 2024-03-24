import React from 'react';
import classes from './Dialogs.module.css';

type DialogsProps = {}

export const Dialogs = (props: DialogsProps) => {
    return (
        <div className={classes.dialogs}>
            <h3>My dialogs</h3>
            <div className={classes.dialogs_container}>
                <ul className={classes.dialogs_list}>
                    <li className={classes.dialogs_user}>
                        <div>Avatar</div>
                        <div>Name</div>
                    </li>
                    <li className={classes.dialogs_user}>
                        <div>Avatar</div>
                        <div>Name</div>
                    </li>
                    <li className={classes.dialogs_user}>
                        <div>Avatar</div>
                        <div>Name</div>
                    </li>
                    <li className={classes.dialogs_user}>
                        <div>Avatar</div>
                        <div>Name</div>
                    </li>
                    <li className={classes.dialogs_user}>
                        <div>Avatar</div>
                        <div>Name</div>
                    </li>
                    <li className={classes.dialogs_user}>
                        <div>Avatar</div>
                        <div>Name</div>
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