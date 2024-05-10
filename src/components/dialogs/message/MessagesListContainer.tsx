import * as React from 'react';
import {ActionsType, MessageProps} from "../../../redux/Store";
import {useRef} from "react";
import {addMessageAC, onMessageChangeAC} from "../../../redux/dialogs-reducer";
import {MessagesList} from "./MessagesList";

type MessagesListProps = {
    messages: Array<MessageProps>
    dispatch: (action: ActionsType) => void
    newMessageText: string
};
export const MessagesListContainer = ({
                                 messages,
                                 dispatch,
                                 newMessageText,
                             }: MessagesListProps) => {
    const newMessageElement = useRef<HTMLTextAreaElement>(null)

    const AddMessage = () => {
        dispatch(addMessageAC());
    }

    const messageChange = (text: string) => {
        if (text !== null) {
            dispatch(onMessageChangeAC(text));
        }
    }

    return (
        <MessagesList messages={messages}
                      addMessage={AddMessage}
                      messageChange={messageChange}
                      newMessageText={newMessageText}/>
    );
};