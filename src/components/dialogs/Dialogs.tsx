import React from 'react';
import classes from './Dialogs.module.css';
import {DialogsList} from "./dialog/DialogsList";
import {ActionsType, DialogsStateProps} from "../../redux/Store";
import {MessagesListContainer} from "./message/MessagesListContainer";

type DialogsProps = {
    state: DialogsStateProps
    dispatch: (action: ActionsType) => void
}

export const Dialogs = ({
                            state,
                            dispatch
                        }: DialogsProps) => {
    return (
        <div className={classes.dialogs}>
            <h3>My dialogs</h3>
            <div className={classes.dialogs_container}>
                <DialogsList users={state.users}/>
                <MessagesListContainer messages={state.messages}
                              dispatch={dispatch}
                              newMessageText={state.newMessageText}/>
            </div>
        </div>
    );
};