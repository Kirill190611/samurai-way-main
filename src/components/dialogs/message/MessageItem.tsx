// @flow
import * as React from 'react';
import classes from "../Dialogs.module.css";
import {MessageProps} from "../../../redux/State";

export const MessageItem = ({
                                id,
                                message,
                                isFriendMessage
                            }: MessageProps) => {
    return (
        <li className={isFriendMessage ? classes.dialogs_message_friend : classes.dialogs_message}
            key={id}>
            {message}
        </li>
    );
};