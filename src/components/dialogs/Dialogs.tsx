import React from 'react';
import classes from './Dialogs.module.css';
import {DialogsList,} from "./dialog/DialogsList";
import {MessagesList} from "./message/MessagesList";
import {ActionsType, DialogsStateProps} from "../../redux/State";

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
                <MessagesList messages={state.messages}
                              dispatch={dispatch}
                              newMessageText={state.newMessageText}/>
            </div>
        </div>
    );
};