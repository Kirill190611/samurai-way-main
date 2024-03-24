import React from 'react';
import classes from './Dialogs.module.css';
import {DialogsList, UsersProps} from "./DialogsList";
import {DialogsMessage} from "./DialogsMessage";

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

    return (
        <div className={classes.dialogs}>
            <h3>My dialogs</h3>
            <div className={classes.dialogs_container}>
                <DialogsList users={users} />
                <ul className={classes.dialogs_messages}>
                    <DialogsMessage message="Hello"/>
                    <DialogsMessage message="Im Kirill"/>
                    <DialogsMessage message="How are you?"/>
                    <DialogsMessage message="OK"/>
                    <DialogsMessage message="HI"/>
                    <DialogsMessage message="Hello"/>
                </ul>
            </div>
        </div>
    );
};