import React, {useRef} from 'react';
import classes from './MyPosts.module.css'
import {PostList} from "./PostList";
import {PostProps} from "../../../../redux/Store";

type MyPostsProps = {
    posts: Array<PostProps>
    newPostText: string
    addPost: () => void
    updateNewPostText: (text: string) => void
}

export const MyPosts = ({
                            posts,
                            newPostText,
                            addPost,
                            updateNewPostText
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