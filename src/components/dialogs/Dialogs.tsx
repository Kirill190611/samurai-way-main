import React from 'react';
import classes from './Dialogs.module.css';
import {DialogsList} from "./dialog/DialogsList";
import {MessagesListContainer} from "./message/MessagesListContainer";

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <h3>My dialogs</h3>
            <div className={classes.dialogs_container}>
                <DialogsList/>
                <MessagesListContainer/>
            </div>
        </div>
    );
};