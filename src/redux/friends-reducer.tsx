import {ActionsType, FriendsStateProps} from "./Store";
import {v1} from "uuid";

const FOLLOW = "FOLLOW";
const SHOW_MORE = "SHOW-MORE";
const UNFOLLOW = "UNFOLLOW";

let initialFriendsState: FriendsStateProps = {
    friends: [
        {
            id: v1(),
            name: "Dmitriy K.",
            avatar: "Avatar1",
            address: {
                country: "Belarus",
                city: "Minsk",
            },
            status: "I am looking fir a Job right now...",
            followed: false,
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
            followed: false,
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
            followed: true,
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
            followed: true,
        },
    ],
}
export const friendsReducer = (state = initialFriendsState, action: ActionsType): FriendsStateProps => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                friends: state.friends.map(user => user.id === action.userId
                    ? {...user, followed: true}
                    : user)
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                friends: state.friends.map(user => user.id === action.userId
                    ? {...user, followed: false}
                    : user)
            }
        }
        case SHOW_MORE: {
            return state;
        }
        default:
            return state;
    }
}

export const onFollowFriendAC = (userId: string) => {
    return {
        type: FOLLOW,
        userId
    } as const
}

export const unfollowFriendAC = (userId: string) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}

export const showMoreFriendsAC = () => {
    return {
        type: SHOW_MORE
    } as const
}