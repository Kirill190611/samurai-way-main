import * as React from 'react';
import classes from "./Dialogs.module.css";

export type MessageProps = {
    id: number
    message: string
}

type MessagesListProps = {
    messages: Array<MessageProps>
};
export const MessagesList = ({messages}: MessagesListProps) => {
    return (
        <ul className={classes.dialogs_messages}>

            {messages.map(message => {
                return (
                    <li className={classes.dialogs_message} key={message.id}>
                        {message.message}
                    </li>
                )
            })}

        </ul>
    );
};