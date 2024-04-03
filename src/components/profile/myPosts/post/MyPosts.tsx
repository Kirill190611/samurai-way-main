import React from 'react';
import classes from './MyPosts.module.css'
import {PostList, PostProps} from "./PostList";

export const MyPosts = () => {

    const postsData: Array<PostProps> = [
        {
            id: 1,
            post: "Hello. How are you",
            likesCount: 5,
            src: "https://i1.sndcdn.com/avatars-000179405104-pcjko5-t240x240.jpg",
        },
        {
            id: 2,
            post: "My first post",
            likesCount: 10,
            src: "https://sotni.ru/wp-content/uploads/2023/08/gai-foks-khaker-8.webp",
        },
    ]

    return (
        <div>
            <h3>My posts</h3>
            <form className={classes.form}
                  action="#">
                <textarea placeholder="your news"></textarea>
                <button type="submit">Add post</button>
            </form>
            <PostList postsData={postsData}/>
        </div>
    );
};