import React, {ChangeEvent, useRef, useState} from 'react';
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

    const [value, setValue] = useState("")
    const onAddPost = () => {
        if (newPostElement.current !== null) {
            addPost(newPostElement.current.value);
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <div>
            <h3>My posts</h3>
            <div className={classes.form}>
                <textarea value={value}
                          ref={newPostElement}
                          onChange={onChangeHandler}
                          placeholder="your news"></textarea>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <PostList postsData={posts}/>
        </div>
    );
};