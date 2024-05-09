import {ActionsType, ProfileStateProps} from "./Store";
import {v1} from "uuid";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initProfileState: ProfileStateProps = {
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
            },
        ],
        newPostText: "",
    }

export const profileReducer = (state = initProfileState, action: ActionsType): ProfileStateProps => {
    switch (action.type) {
        case ADD_POST: {
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
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state
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