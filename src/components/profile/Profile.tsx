import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from "./myPosts/post/MyPosts";
import {ProfileInfo} from "./myProfile/ProfileInfo";
import {PostProps, ProfileDataProps} from "../../index";

type ProfileProps = {
    posts: Array<PostProps>
    profile: Array<ProfileDataProps>
}
export const Profile = ({
                            posts,
                            profile
                        }: ProfileProps) => {
    return (
        <main className={classes.profile}>
            <ProfileInfo profile={profile}/>
            <MyPosts posts={posts}/>
        </main>
    );
};