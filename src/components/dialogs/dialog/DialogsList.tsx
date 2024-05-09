import React from 'react';
import {UsersProps} from "../../../redux/Store";
import classes from "../Dialogs.module.css";
import {DialogItem} from "./DialogItem";

type DialogsListProps = {
    users: Array<UsersProps>
}
export const DialogsList = ({users}: DialogsListProps) => {
    return (
        <div>
            <ul className={classes.dialogs_list}>
                {
                    users.map(user => <DialogItem id={user.id}
                                                  name={user.name}
                                                  avatar={user.avatar}/>
                    )
                }
            </ul>
        </div>
    );
};
