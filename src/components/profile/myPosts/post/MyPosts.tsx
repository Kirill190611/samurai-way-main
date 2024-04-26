import React, {useRef} from 'react';
import classes from './MyPosts.module.css'
import {PostList} from "./PostList";
import {ActionsType, addPostAC, onPostChangeAC, PostProps} from "../../../../redux/State";

type MyPostsProps = {
    posts: Array<PostProps>
    newPostText: string
    dispatch: (action: ActionsType) => void
}

export const MyPosts = ({
                            posts,
                            newPostText,
                            dispatch
                        }: MyPostsProps) => {
    const newPostElement = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        dispatch(addPostAC());
    }

    const onPostChange = () => {
        if (newPostElement.current !== null) {
            dispatch(onPostChangeAC(newPostElement.current.value));
        }
    }

    return (
        <div>
            <h3>My posts</h3>
            <div className={classes.form}>
                <textarea value={newPostText}
                          ref={newPostElement}
                          placeholder="your news"
                          onChange={onPostChange}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <PostList postsData={posts}/>
        </div>
    );
};