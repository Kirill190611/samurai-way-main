import React from 'react';
import {StoreProps} from "../../../redux/Store";
import {addMessageAC, onMessageChangeAC} from "../../../redux/dialogs-reducer";
import {MessagesList} from "./MessagesList";
import {StoreContext} from "../../../StoreContext";

export const MessagesListContainer = () => {

    return (
        <StoreContext.Consumer>

                {
                    ((store: StoreProps | null) => {
                        const AddMessage = () => {
                            store?.dispatch(addMessageAC());
                        }

                        const messageChange = (text: string) => {
                            if (text !== null) {
                                store?.dispatch(onMessageChangeAC(text));
                            }
                        }

                        return (
                            <MessagesList messages={store?.getState().dialogsPage.messages || []}
                                          addMessage={AddMessage}
                                          messageChange={messageChange}
                                          newMessageText={store?.getState().dialogsPage.newMessageText || ""}/>
                        );
                    })
                }

        </StoreContext.Consumer>

    );
};