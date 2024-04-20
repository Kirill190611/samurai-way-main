import React, {ChangeEvent, useRef, useState} from 'react';
import classes from './MyPosts.module.css'
import {PostList} from "./PostList";
import {addPost, PostProps, state, updateNewPostText} from "../../../../redux/State";

type MyPostsProps = {
    posts: Array<PostProps>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const MyPosts = ({
                            posts,
                            addPost,
                            newPostText,
                            updateNewPostText,
                        }: MyPostsProps) => {
    const newPostElement = useRef<HTMLTextAreaElement>(null)

    const onAddPost = () => {
        addPost();
    }

    const onPostChange = () => {
        if (newPostElement.current !== null) {
            updateNewPostText(newPostElement.current.value);
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