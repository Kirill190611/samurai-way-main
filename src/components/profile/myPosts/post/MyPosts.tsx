import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post";

export const MyPosts = () => {
    return (
        <div>
            <h3>My posts</h3>
            <form className=""
                  action="#">
                <textarea placeholder="your news"></textarea>
                <button type="submit">Add post</button>
            </form>
            <ul>
                <Post message="Hello. How are you?"
                      likeQty={5}
                      src="https://i1.sndcdn.com/avatars-000179405104-pcjko5-t240x240.jpg"/>
                <Post message="My first post"
                      likeQty={10}
                      src="https://sotni.ru/wp-content/uploads/2023/08/gai-foks-khaker-8.webp"/>
            </ul>
        </div>
    );
};