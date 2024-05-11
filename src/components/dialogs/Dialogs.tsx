import React from 'react';
import classes from './Dialogs.module.css';
import {MessagesListContainer} from "./message/MessagesListContainer";
import {DialogsListContainer} from "./dialog/DialogsListContainer";

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <h3>My dialogs</h3>
            <div className={classes.dialogs_container}>
                <DialogsListContainer/>
                <MessagesListContainer/>
            </div>
        </div>
    );
};