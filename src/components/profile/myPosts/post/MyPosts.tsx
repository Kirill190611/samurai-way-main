import React, {useRef, useState} from 'react';
import classes from './MyPosts.module.css'
import {PostList} from "./PostList";
import {addPost, PostProps, state} from "../../../../redux/State";

type MyPostsProps = {
    posts: Array<PostProps>
    addPost: (postMessage: string) => void
}

export const MyPosts = ({
                            posts,
                            addPost
                        }: MyPostsProps) => {
    const newPostElement = useRef<HTMLTextAreaElement>(null)
    const onAddPost = () => {
        if (newPostElement.current !== null) {
            addPost(newPostElement.current.value);
        }
    }

    return (
        <div>
            <h3>My posts</h3>
            <form className={classes.form}
                  action="#">
                <textarea ref={newPostElement} placeholder="your news"></textarea>
                <button onClick={onAddPost}>Add post</button>
            </form>
            <PostList postsData={posts}/>
        </div>
    );
};