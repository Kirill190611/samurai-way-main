// @flow
import * as React from 'react';
import classes from "../Dialogs.module.css";
import {MessageProps} from "../../../redux/State";

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