import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from "./myPosts/post/MyPosts";
import {ProfileInfo} from "./myProfile/ProfileInfo";
import {ProfileStateProps} from "../../redux/State";

type ProfileProps = {
    state: ProfileStateProps
    addPost: () => void
    updateNewPostText: (newText: string) => void
}
export const Profile = ({
                            state,
                            addPost,
                            updateNewPostText,
                        }: ProfileProps) => {
    return (
        <main className={classes.profile}>
            <ProfileInfo profile={state.profileData}/>
            <MyPosts posts={state.postsData}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}
                     newPostText={state.newPostText}/>
        </main>
    );
};