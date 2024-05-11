import React from 'react';
import classes from './Profile.module.css';
import {MyPostsContainer} from "./myPosts/post/MyPostsContainer";
import {ProfileInfoContainer} from "./myProfile/ProfileInfoContainer";

export const Profile = () => {
    return (
        <main className={classes.profile}>
            <ProfileInfoContainer/>
            <MyPostsContainer/>
        </main>
    );
};