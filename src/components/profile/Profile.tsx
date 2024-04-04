import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from "./myPosts/post/MyPosts";
import {ProfileInfo} from "./myProfile/ProfileInfo";
import {PostProps} from "./myPosts/post/PostList";

export const Profile = () => {

    const posts: Array<PostProps> = [
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
        {
            id: 3,
            post: "Good day everyone!",
            likesCount: 25,
            src: "https://sotni.ru/wp-content/uploads/2023/08/gai-foks-khaker-8.webp",
        },
    ]

    return (
        <main className={classes.profile}>
            <ProfileInfo name="Soldatov K"
                         birthdayDate="19/06/1994"
                         profileImage="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                         avatarImage="https://i1.sndcdn.com/avatars-000179405104-pcjko5-t240x240.jpg"
                         city="Obninsk"
                         education="Bauman Moscow State Technical University`16"/>
            <MyPosts posts={posts}/>
        </main>
    );
};