import React from 'react';
import classes from './Dialogs.module.css';
import {DialogsList,} from "./dialog/DialogsList";
import {MessagesList} from "./message/MessagesList";
import {MessageProps, UsersProps} from "../../index";

type DialogsProps = {
    users: Array<UsersProps>
    messages: Array<MessageProps>
}

export const Dialogs = ({
                            users,
                            messages,
                        }: DialogsProps) => {
    return (
        <div className={classes.dialogs}>
            <h3>My dialogs</h3>
            <div className={classes.dialogs_container}>
                <DialogsList users={users}/>
                <MessagesList messages={messages}/>
            </div>
        </div>
    );
};