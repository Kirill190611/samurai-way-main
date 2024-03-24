import React from 'react';
import classes from "./Dialogs.module.css";

type DialogsMessageProps = {
    message: string
}
export const DialogsMessage = ({
                                   message
                               }: DialogsMessageProps) => {
    return (
        <li className={classes.dialogs_message}>
            {message}
        </li>
    );
};