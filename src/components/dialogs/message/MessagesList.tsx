import * as React from 'react';
import classes from "../Dialogs.module.css";
import {MessageItem} from "./MessageItem";
import {MessageProps} from "../../../redux/Store";
import {useRef} from "react";

type MessagesListProps = {
    messages: Array<MessageProps>
    newMessageText: string
    addMessage: () => void
    messageChange: (text: string) => void
};
export const MessagesList = ({
                                 messages,
                                 newMessageText,
                                 addMessage,
                                 messageChange,
                             }: MessagesListProps) => {
    const newMessageElement = useRef<HTMLTextAreaElement>(null)

    const AddMessage = () => {
        addMessage();
    }

    const onMessageChange = () => {
        if (newMessageElement.current !== null) {
            messageChange(newMessageElement.current.value);
        }
    }

    return (
        <div className={classes.dialogs_message__container}>
            <ul className={classes.dialogs_messages}>

                {messages.map(message => <MessageItem id={message.id}
                                                      message={message.message}
                                                      isFriendMessage={message.isFriendMessage}/>)}

            </ul>
            <div className={classes.dialogs_addMessage}>
                <textarea ref={newMessageElement} value={newMessageText}
                          placeholder="your news"
                          onChange={onMessageChange}/>
                <button onClick={AddMessage}>Add message</button>
            </div>
        </div>
    );
};