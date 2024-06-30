import {v1} from "uuid";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

export type FriendsListProps = {
    id: string
    name: string
    avatar: string
    address: {
        country: string
        city: string
    },
    status: string
    followed: boolean
}
export type FriendsStateProps = {
    friends: FriendsListProps[]
}
export type PostProps = {
    id: string
    post: string
    likesCount: number
    src: string
}
export type ProfileDataProps = {
    name: string
    birthdayDate: string
    profileImage: string
    avatarImage: string
    city: string
    education: string
    id: string
}
export type UsersProps = {
    id: string
    name: string
    avatar: string
}
export type MessageProps = {
    id: string
    message: string
    isFriendMessage: boolean
}
export type TopFriendsProps = {
    id: string
    name: string
    avatar: string
}
export type ProfileStateProps = {
    postsData: Array<PostProps>
    profileData: Array<ProfileDataProps>
    newPostText: string
}
export type DialogsStateProps = {
    users: Array<UsersProps>
    messages: Array<MessageProps>
    newMessageText: string
}
export type NavigationStateProps = {
    topFriends: Array<TopFriendsProps>
}
export type StateProps = {
    profilePage: ProfileStateProps
    dialogsPage: DialogsStateProps
    navigationPage: NavigationStateProps
}
export type StoreProps = {
    _state: StateProps
    _callSubscriber: (state: StateProps) => void
    subscribe: (observer: (state: StateProps) => void) => void
    getState: () => StateProps
    dispatch: (action: ActionsType) => void
}
type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}
type UpdatedNewMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessage: string
}
type FollowToNewFriendActionType = {
    type: "FOLLOW"
    userId: string
}
type UnfollowFromFriendActionType = {
    type: "UNFOLLOW"
    userId: string
}
type ShowMoreFriendsActionType = {
    type: "SHOW-MORE"
}
type SetFriendsActionType = {
    type: "SET-FRIENDS"
    friends: FriendsListProps[]
}

export type ActionsType = AddPostActionType
    | UpdateNewPostTextActionType
    | AddMessageActionType
    | UpdatedNewMessageTextActionType
    | FollowToNewFriendActionType
    | ShowMoreFriendsActionType
    | UnfollowFromFriendActionType
    | SetFriendsActionType

export let store: StoreProps = {
    _state: {
        profilePage: {
            postsData: [
                {
                    id: v1(),
                    post: "Hello. How are you",
                    likesCount: 5,
                    src: "https://i1.sndcdn.com/avatars-000179405104-pcjko5-t240x240.jpg",
                },
                {
                    id: v1(),
                    post: "My first post",
                    likesCount: 10,
                    src: "https://sotni.ru/wp-content/uploads/2023/08/gai-foks-khaker-8.webp",
                },
                {
                    id: v1(),
                    post: "My second post",
                    likesCount: 15,
                    src: "https://sotni.ru/wp-content/uploads/2023/08/gai-foks-khaker-8.webp",
                },
            ],
            profileData: [
                {
                    name: "Soldatov Kirill",
                    birthdayDate: "19/06/1994",
                    profileImage: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
                    avatarImage: "https://i1.sndcdn.com/avatars-000179405104-pcjko5-t240x240.jpg",
                    city: "Obninsk",
                    education: "Bauman Moscow State Technical University`16",
                    id: v1(),
                },
            ],
            newPostText: "",
        },
        dialogsPage: {
            users: [
                {id: v1(), name: "Kirill", avatar: "Avatar1",},
                {id: v1(), name: "Nastya", avatar: "Avatar2",},
                {id: v1(), name: "Dima", avatar: "Avatar3",},
                {id: v1(), name: "Sergey", avatar: "Avatar4",},
                {id: v1(), name: "Artem", avatar: "Avatar5",},
                {id: v1(), name: "Valera", avatar: "Avatar6",},
            ],
            messages: [
                {id: v1(), message: "Hello", isFriendMessage: false},
                {id: v1(), message: "Hello, Im Kirill", isFriendMessage: true},
                {id: v1(), message: "How are you?", isFriendMessage: true},
                {id: v1(), message: "OK", isFriendMessage: false},
                {id: v1(), message: "What about you?", isFriendMessage: false},
                {id: v1(), message: "Im good too", isFriendMessage: true},
            ],
            newMessageText: "",
        },
        navigationPage: {
            topFriends: [
                {id: v1(), name: "Nastya", avatar: "avatar 1"},
                {id: v1(), name: "Sasha", avatar: "avatar 2"},
                {id: v1(), name: "Lika", avatar: "avatar 3"},
            ]
        }
    },
    _callSubscriber(_state: StateProps) {
        console.log("State were changed")
    },

    getState() {
        return this._state;
    },
    subscribe(observer: (state: StateProps) => void) {
        this._callSubscriber = observer; // наблюдатель // publisher-subscriber // addEventListener
    },

    dispatch(action: ActionsType) { // { type: 'What need to do', }
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}
