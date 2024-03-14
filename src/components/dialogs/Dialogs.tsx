import React from 'react';
import classes from './Dialogs.module.css';

type DialogsProps = {

}

export const Dialogs = (props: DialogsProps) => {
    return (
        <div className={classes.dialogs}>
            <ul className={classes.dialogs_friends_container}>
                <li>Kirill</li>
                <li>Kirill</li>
                <li>Kirill</li>
                <li>Kirill</li>
                <li>Kirill</li>
                <li>Kirill</li>
            </ul>
            <div className={classes.dialogs_container}>
                <h3>My dialogs</h3>
                <ul>
                    <li>
                        <div>Avatar</div>
                        <div>Name</div>
                        <div>Message</div>
                    </li>
                    <li>
                        <div>Avatar</div>
                        <div>Name</div>
                        <div>Message</div>
                    </li>
                    <li>
                        <div>Avatar</div>
                        <div>Name</div>
                        <div>Message</div>
                    </li>
                </ul>
            </div>
        </div>
    );
};