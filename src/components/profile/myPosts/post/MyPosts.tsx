import React, {useRef} from 'react';
import classes from './MyPosts.module.css'
import {PostList} from "./PostList";
import {PostProps} from "../../../../redux/State";

type MyPostsProps = {
    posts: Array<PostProps>
}

export const MyPosts = ({posts}: MyPostsProps) => {
    const newPostElement = useRef<HTMLTextAreaElement>(null)
    const onAddPost = () => {
        if (newPostElement.current !== null) {
            let text = newPostElement.current.value;
            alert(text);
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