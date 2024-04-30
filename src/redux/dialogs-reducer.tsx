import {ActionsType, DialogsStateProps} from "./State";
import {v1} from "uuid";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
export const dialogsReducer = (state: DialogsStateProps, action: ActionsType): DialogsStateProps => {
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