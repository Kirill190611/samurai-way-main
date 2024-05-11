import React from 'react';
import classes from './Profile.module.css';
import {ProfileInfo} from "./myProfile/ProfileInfo";
import {MyPostsContainer} from "./myPosts/post/MyPostsContainer";

export const Profile = () => {
    return (
        <main className={classes.profile}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </main>
    );
};