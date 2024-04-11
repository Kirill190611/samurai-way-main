import * as React from 'react';
import classes from "../Dialogs.module.css";
import {MessageItem} from "./MessageItem";
import {MessageProps} from "../../../redux/State";
import {useRef} from "react";

type MessagesListProps = {
    messages: Array<MessageProps>
};
export const MessagesList = ({
                                 messages
                             }: MessagesListProps) => {
    const newMessageElement = useRef<HTMLTextAreaElement>(null)

    const onAddMessage = () => {
        if (newMessageElement.current !== null) {
            alert(newMessageElement.current.value)
        }
    }

    return (
        <div className={classes.dialogs_message__container}>
            <ul className={classes.dialogs_messages}>

                {messages.map(message => <MessageItem id={message.id}
                                                      message={message.message}
                                                      isFriendMessage={message.isFriendMessage}/>)}

            </ul>
            <form className={classes.dialogs_addMessage} action="#">
                <textarea ref={newMessageElement} placeholder="your news"></textarea>
                <button onClick={onAddMessage}>Add message</button>
            </form>
        </div>
    );
};