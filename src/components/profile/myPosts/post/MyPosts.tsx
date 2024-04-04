import React from 'react';
import classes from './MyPosts.module.css'
import {PostList, PostProps} from "./PostList";

type MyPostsProps = {
    posts: Array<PostProps>
}
export const MyPosts = ({posts}: MyPostsProps) => {

    return (
        <div>
            <h3>My posts</h3>
            <form className={classes.form}
                  action="#">
                <textarea placeholder="your news"></textarea>
                <button type="submit">Add post</button>
            </form>
            <PostList postsData={posts}/>
        </div>
    );
};