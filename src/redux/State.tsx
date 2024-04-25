export type PostProps = {
    id: number
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
}

export type UsersProps = {
    id: number
    name: string
    avatar: string
}

export type MessageProps = {
    id: number
    message: string
    isFriendMessage: boolean
}

export type TopFriendsProps = {
    id: number
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

export type ActionsType = AddPostActionType
    | UpdateNewPostTextActionType
    | AddMessageActionType
    | UpdatedNewMessageTextActionType

export let store: StoreProps = {
    _state: {
        profilePage: {
            postsData: [
                {
                    id: 1,
                    post: "Hello. How are you",
                    likesCount: 5,
                    src: "https://i1.sndcdn.com/avatars-000179405104-pcjko5-t240x240.jpg",
                },
                {
                    id: 2,
                    post: "My first post",
                    likesCount: 10,
                    src: "https://sotni.ru/wp-content/uploads/2023/08/gai-foks-khaker-8.webp",
                },
                {
                    id: 3,
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
                },
            ],
            newPostText: "IT-KAMASUTRA",
        },
        dialogsPage: {
            users: [
                {id: 1, name: "Kirill", avatar: "Avatar1",},
                {id: 2, name: "Nastya", avatar: "Avatar2",},
                {id: 3, name: "Dima", avatar: "Avatar3",},
                {id: 4, name: "Sergey", avatar: "Avatar4",},
                {id: 5, name: "Artem", avatar: "Avatar5",},
                {id: 6, name: "Valera", avatar: "Avatar6",},
            ],
            messages: [
                {id: 1, message: "Hello", isFriendMessage: false},
                {id: 2, message: "Hello, Im Kirill", isFriendMessage: true},
                {id: 3, message: "How are you?", isFriendMessage: true},
                {id: 4, message: "OK", isFriendMessage: false},
                {id: 5, message: "What about you?", isFriendMessage: false},
                {id: 6, message: "Im good too", isFriendMessage: true},
            ],
            newMessageText: "Test message",
        },
        navigationPage: {
            topFriends: [
                {id: 1, name: "Nastya", avatar: "avatar 1"},
                {id: 2, name: "Sasha", avatar: "avatar 2"},
                {id: 3, name: "Lika", avatar: "avatar 3"},
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
        if (action.type === 'ADD-POST') {
            const newPost = {
                id: 4,
                post: this._state.profilePage.newPostText,
                likesCount: 0,
                src: "https://sotni.ru/wp-content/uploads/2023/08/gai-foks-khaker-8.webp"
            }
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            const newMessage = {
                id: 7,
                message: this._state.dialogsPage.newMessageText,
                isFriendMessage: false,
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = "";
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        }
    }
}
