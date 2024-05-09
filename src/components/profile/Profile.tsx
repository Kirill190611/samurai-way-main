import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from "./myPosts/post/MyPosts";
import {ProfileInfo} from "./myProfile/ProfileInfo";
import {ActionsType, ProfileStateProps} from "../../redux/Store";

type ProfileProps = {
    state: ProfileStateProps
    dispatch: (action: ActionsType) => void
}
export const Profile = ({
                            state,
                            dispatch
                        }: ProfileProps) => {
    return (
        <main className={classes.profile}>
            <ProfileInfo profile={state.profileData}/>
            <MyPosts posts={state.postsData}
                     dispatch={dispatch}
                     newPostText={state.newPostText}/>
        </main>
    );
};