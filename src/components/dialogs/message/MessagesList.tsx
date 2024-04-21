import * as React from 'react';
import classes from "../Dialogs.module.css";
import {MessageItem} from "./MessageItem";
import {addMessage, MessageProps} from "../../../redux/State";
import {useRef} from "react";

type MessagesListProps = {
    messages: Array<MessageProps>
    addMessage: () => void
    updatedNewMessageText: (newMessage: string) => void
    newMessage: string
};
export const MessagesList = ({
                                 messages,
                                 addMessage,
                                 updatedNewMessageText,
                                 newMessage,
                             }: MessagesListProps) => {
    const newMessageElement = useRef<HTMLTextAreaElement>(null)

    const onAddMessage = () => {
        addMessage();
    }

    const onMessageChange = () => {
        if (newMessageElement.current !== null) {
            updatedNewMessageText(newMessageElement.current.value);
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
                <textarea ref={newMessageElement} value={newMessage}
                          placeholder="your news"
                          onChange={onMessageChange}/>
                <button onClick={onAddMessage}>Add message</button>
            </form>
        </div>
    );
};