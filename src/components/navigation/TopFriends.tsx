import React from 'react';
import {TopFriendsProps} from "../../redux/Store";
import classes from './Navigation.module.css';

type TopFriendProps = {
    friendsList: Array<TopFriendsProps>
}
export const TopFriends = ({
                               friendsList
                           }: TopFriendProps) => {
    return (
        <div className={classes.topFriend}>
            <h3>Friends</h3>
            <ul className={classes.friend__list}>

                {friendsList.map(friend => {
                    return (
                        <li className={classes.friend__list__item}
                            key={friend.id}>
                            <div className={classes.friend__list__itemAvatar}>{friend.avatar}</div>
                            <div className={classes.friend__list__itemName}>{friend.name}</div>
                        </li>
                    )
                })}

            </ul>
        </div>
    );
};