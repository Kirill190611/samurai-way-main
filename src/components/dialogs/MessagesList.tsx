import * as React from 'react';
import classes from "./Dialogs.module.css";
import {MessageItem} from "./MessageItem";

export type MessageProps = {
    id: number
    message: string
}

type MessagesListProps = {
    messages: Array<MessageProps>
};
export const MessagesList = ({
                                 messages
                             }: MessagesListProps) => {
    return (
        <ul className={classes.dialogs_messages}>

            {messages.map(message => <MessageItem id={message.id}
                                                  message={message.message}/>)}

        </ul>
    );
};