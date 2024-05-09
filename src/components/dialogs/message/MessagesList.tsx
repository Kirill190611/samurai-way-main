import * as React from 'react';
import classes from "../Dialogs.module.css";
import {MessageItem} from "./MessageItem";
import {ActionsType, MessageProps} from "../../../redux/Store";
import {useRef} from "react";
import {addMessageAC, onMessageChangeAC} from "../../../redux/dialogs-reducer";

type MessagesListProps = {
    messages: Array<MessageProps>
    dispatch: (action: ActionsType) => void
    newMessageText: string
};
export const MessagesList = ({
                                 messages,
                                 dispatch,
                                 newMessageText,
                             }: MessagesListProps) => {
    const newMessageElement = useRef<HTMLTextAreaElement>(null)

    const AddMessage = () => {
        dispatch(addMessageAC());
    }

    const onMessageChange = () => {
        if (newMessageElement.current !== null) {
            dispatch(onMessageChangeAC(newMessageElement.current.value));
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