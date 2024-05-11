import React from 'react';
import classes from "../Dialogs.module.css";
import {DialogItem} from "./DialogItem";
import {StoreContext} from "../../../StoreContext";
import {StoreProps} from "../../../redux/Store";

export const DialogsList = () => {
    return (
        <StoreContext.Consumer>
            {
                ((store: StoreProps | null) => {
                    return (
                        <div>
                            <ul className={classes.dialogs_list}>
                                {
                                    store?.getState().dialogsPage.users.map(user => <DialogItem id={user.id}
                                                                                               name={user.name}
                                                                                               avatar={user.avatar}/>
                                    )
                                }
                            </ul>
                        </div>
                    );
                })
            }
        </StoreContext.Consumer>
    );
};
