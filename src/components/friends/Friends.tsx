import React from 'react';
import classes from './Friends.module.css';
import {FriendsStateProps} from "../../redux/Store";

export const Friends = ({friends}: FriendsStateProps) => {
    return (
        <div className={classes.friends}>
            <h3>Friends</h3>
            <ul className={classes.friends_container}>
                {
                    friends.map(
                        friend => {
                            return (
                                <li className={classes.friends_item} key={friend.id}>
                                    <div className={classes.friends_imageContainer}>
                                        <div className={classes.friends_avatar}>{friend.avatar}</div>
                                        <button>{friend.followed ? "Follow" : "Unfollow"}</button>
                                    </div>
                                    <div>
                                        <div>{friend.name}</div>
                                        <div>{friend.address.city}</div>
                                        <div>{friend.address.country}</div>
                                        <p>{friend.status}</p>
                                    </div>
                                </li>
                            )
                        }
                    )
                }
            </ul>
            <button>Show more</button>
        </div>
    );
};