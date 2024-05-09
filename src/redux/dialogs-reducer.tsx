import {ActionsType, DialogsStateProps} from "./Store";
import {v1} from "uuid";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initDialogsState: DialogsStateProps = {
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
}
export const dialogsReducer = (state = initDialogsState, action: ActionsType): DialogsStateProps => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {
                    id: v1(),
                    message: state.newMessageText,
                    isFriendMessage: false,
                }],
                newMessageText: ""
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newMessage
            }
        }
        default:
            return state
    }
}

export const addMessageAC = () => {
    return {
        type: ADD_MESSAGE
    } as const
}

export const onMessageChangeAC = (newMessage: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage
    } as const
}