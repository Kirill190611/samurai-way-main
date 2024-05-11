import {ActionsType} from "../../../../redux/Store";
import {addPostAC, onPostChangeAC} from "../../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../../redux/redux-store";

let mapStateToProps = (state: AppRootStateType) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {
        updateNewPostText: (text: string) => {
            if (text !== null) {
                dispatch(onPostChangeAC(text));
            }
        },
        addPost: () => {
            dispatch(addPostAC());
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);