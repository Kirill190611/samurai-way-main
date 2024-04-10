import React from 'react';
import classes from './Dialogs.module.css';
import {DialogsList,} from "./dialog/DialogsList";
import {MessagesList} from "./message/MessagesList";
import {DialogsStateProps} from "../../redux/State";

type DialogsProps = {
    state: DialogsStateProps
}

export const Dialogs = ({
                            state
                        }: DialogsProps) => {
    return (
        <div className={classes.dialogs}>
            <h3>My dialogs</h3>
            <div className={classes.dialogs_container}>
                <DialogsList users={state.users}/>
                <MessagesList messages={state.messages}/>
            </div>
        </div>
    );
};