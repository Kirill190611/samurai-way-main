// @flow
import * as React from 'react';
import classes from "../Dialogs.module.css";
import {MessageProps} from "../../../redux/Store";

export const MessageItem = ({
                                id,
                                message,
                                isFriendMessage
                            }: MessageProps) => {
    return (
        <li className={isFriendMessage ? classes.dialogs_message : classes.dialogs_message_friend}
            key={id}>
            {message}
        </li>
    );
};