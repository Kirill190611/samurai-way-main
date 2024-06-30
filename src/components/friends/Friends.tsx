import React from 'react';
import classes from './Friends.module.css';
import {FriendsListProps} from "../../redux/Store";
import {v1} from "uuid";

type FriendsProps = {
    friends: FriendsListProps[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setFriends: (friends: FriendsListProps[]) => void
}

export const Friends = ({
                            friends,
                            follow,
                            unfollow,
                            setFriends
                        }: FriendsProps) => {
    if (friends.length === 0 ) {
        setFriends([
        {
            id: v1(),
            name: "Dmitriy K.",
            avatar: "Avatar1",
            address: {
                country: "Belarus",
                city: "Minsk",
            },
            status: "I am looking fir a Job right now...",
            followed: true,
        },
        {
            id: v1(),
            name: "Svetlana D.",
            avatar: "Avatar2",
            address: {
                country: "Belarus",
                city: "Minsk",
            },
            status: "I am so pretty",
            followed: true,
        },
        {
            id: v1(),
            name: "Kirill S.",
            avatar: "Avatar3",
            address: {
                country: "Russia",
                city: "Obninsk",
            },
            status: "I like football!",
            followed: false,
        },
        {
            id: v1(),
            name: "Andrew T.",
            avatar: "Avatar4",
            address: {
                country: "USA",
                city: "LA",
            },
            status: "I am free to help you to create good Video Production!",
            followed: false,
        },
    ])
    }

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
                                        {friend.followed
                                            ? <button onClick={() => {
                                                unfollow(friend.id)
                                            }}>Follow</button>
                                            : <button onClick={() => {
                                                follow(friend.id)
                                            }}>Unfollow</button>}
                                    </div>
                                    <div className={classes.friends_infoContainer}>
                                        <div>
                                            <div>{friend.name}</div>
                                            <p>{friend.status}</p>
                                        </div>
                                        <div>
                                            <div>{friend.address.city}</div>
                                            <div>{friend.address.country}</div>
                                        </div>
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

//Todo: practice with API (51 - users API)

//Return to initial state due to mistake with API