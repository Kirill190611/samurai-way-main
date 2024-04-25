import React, {ChangeEvent, useRef, useState} from 'react';
import classes from './MyPosts.module.css'
import {PostList} from "./PostList";
import {ActionsType, PostProps} from "../../../../redux/State";

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

    const onAddPost = () => {
        dispatch({
            type: 'ADD-POST'
        });
    }

    const onPostChange = () => {
        if (newPostElement.current !== null) {
            dispatch({
                type: 'UPDATE-NEW-POST-TEXT',
                newText: newPostElement.current.value
            });
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
                <button onClick={onAddPost}>Add post</button>
            </div>
            <PostList postsData={posts}/>
        </div>
    );
};