// @flow
import * as React from 'react';
import {MessageProps} from "./MessagesList";
import classes from "../Dialogs.module.css";

export const MessageItem = ({
                                id,
                                message
                            }: MessageProps) => {
    return (
        <li className={classes.dialogs_message} key={id}>
            {message}
        </li>
    );
};