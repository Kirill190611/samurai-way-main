import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from "./myPosts/post/MyPosts";
import {ProfileInfo} from "./myProfile/ProfileInfo";

export const Profile = () => {
    return (
        <main className={classes.profile}>
            <ProfileInfo name="Soldatov K"
                         birthdayDate="19/06/1994"
                         profileImage="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                         avatarImage="https://i1.sndcdn.com/avatars-000179405104-pcjko5-t240x240.jpg"
                         city="Obninsk"
                         education="Bauman Moscow State Technical University`16"/>
            <MyPosts/>
        </main>
    );
};