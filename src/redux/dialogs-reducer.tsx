import {ActionsType, DialogsStateProps} from "./State";
import {v1} from "uuid";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
export const dialogsReducer = (state: DialogsStateProps, action: ActionsType): DialogsStateProps => {
    switch (action.type) {
        case ADD_MESSAGE: {
            // const newMessage = {
            //     id: v1(),
            //     message: state.newMessageText,
            //     isFriendMessage: false,
            // }
            // state.messages.push(newMessage);
            // state.newMessageText = "";
            // return state;

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
            // state.newMessageText = action.newMessage;
            // return state;

            return {
                ...state,
                newMessageText: action.newMessage
            }
        }
        default:
            throw new Error("I don't understand this type")
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