import React from 'react';
import classes from './Dialogs.module.css';
import {DialogsList, UsersProps} from "./DialogsList";
import {MessageProps, MessagesList} from "./MessagesList";

type DialogsProps = {

}

export const Dialogs = (props: DialogsProps) => {

    const users: Array<UsersProps> = [
        {id: 1, name: "Kirill", avatar: "Avatar1",},
        {id: 2, name: "Nastya", avatar: "Avatar2",},
        {id: 3, name: "Dima", avatar: "Avatar3",},
        {id: 4, name: "Sergey", avatar: "Avatar4",},
        {id: 5, name: "Artem", avatar: "Avatar5",},
        {id: 6, name: "Valera", avatar: "Avatar6",},
    ]

    const messages: Array<MessageProps> = [
        {id: 1, message: "Hello",},
        {id: 2, message: "Im Kirill",},
        {id: 3, message: "How are you?",},
        {id: 4, message: "OK",},
        {id: 5, message: "HI",},
        {id: 6, message: "Hello",},
    ]

    return (
        <div className={classes.dialogs}>
            <h3>My dialogs</h3>
            <div className={classes.dialogs_container}>
                <DialogsList users={users} />
                <MessagesList messages={messages}/>
            </div>
        </div>
    );
};