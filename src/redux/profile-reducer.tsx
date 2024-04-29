import {ActionsType, ProfileStateProps} from "./State";
import {v1} from "uuid";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const profileReducer = (state: ProfileStateProps, action: ActionsType): ProfileStateProps => {
    switch (action.type) {
        case ADD_POST: {
            // const newPost = {
            //     id: v1(),
            //     post: state.newPostText,
            //     likesCount: 0,
            //     src: "https://sotni.ru/wp-content/uploads/2023/08/gai-foks-khaker-8.webp"
            // }
            // state.postsData.push(newPost);
            // state.newPostText = "";
            // return state;
            return {
                ...state,
                postsData: [...state.postsData, {
                    id: v1(),
                    post: state.newPostText,
                    likesCount: 0,
                    src: "https://sotni.ru/wp-content/uploads/2023/08/gai-foks-khaker-8.webp"
                }],
                newPostText: ""
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            // state.newPostText = action.newText;
            // return state;

            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            throw new Error("I don't understand this type")
    }
}

export const addPostAC = () => {
    return {
        type: ADD_POST,
    } as const
}

export const onPostChangeAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText
    } as const
}