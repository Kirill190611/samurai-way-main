import * as React from 'react';
import classes from "../Dialogs.module.css";
import {MessageItem} from "./MessageItem";
import {ActionsType, MessageProps} from "../../../redux/State";
import {useRef} from "react";

type MessagesListProps = {
    messages: Array<MessageProps>
    dispatch: (action: ActionsType) => void
    newMessage: string
};
export const MessagesList = ({
                                 messages,
                                 dispatch,
                                 newMessage,
                             }: MessagesListProps) => {
    const newMessageElement = useRef<HTMLTextAreaElement>(null)

    const onAddMessage = () => {
        dispatch({
            type: "ADD-MESSAGE"
        });
    }

    const onMessageChange = () => {
        if (newMessageElement.current !== null) {
            dispatch({
                type: "UPDATE-NEW-MESSAGE-TEXT",
                newMessage: newMessageElement.current.value
            });
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