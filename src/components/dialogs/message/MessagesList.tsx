import * as React from 'react';
import classes from "../Dialogs.module.css";
import {MessageItem} from "./MessageItem";
import {ActionsType, addMessageAC, MessageProps, onMessageChangeAC} from "../../../redux/State";
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

    const AddMessage = () => {
        dispatch(addMessageAC());
    }

    const onMessageChange = () => {
        if (newMessageElement.current !== null) {
            dispatch(onMessageChangeAC(newMessage));
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
                <button onClick={AddMessage}>Add message</button>
            </form>
        </div>
    );
};