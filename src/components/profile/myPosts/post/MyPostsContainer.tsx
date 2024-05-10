import React from 'react';
import {ActionsType, PostProps} from "../../../../redux/Store";
import {addPostAC, onPostChangeAC} from "../../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

type MyPostsProps = {
    posts: Array<PostProps>
    newPostText: string
    dispatch: (action: ActionsType) => void
}

export const MyPostsContainer = ({
                                     posts,
                                     newPostText,
                                     dispatch,
                                 }: MyPostsProps) => {

    const addPost = () => {
        dispatch(addPostAC());
    }

    const onPostChange = (text: string) => {
        if (text !== null) {
            dispatch(onPostChangeAC(text));
        }
    }

    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 posts={posts}
                 newPostText={newPostText}/>
    );
};