import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from "./myPosts/post/MyPosts";

export const Profile = () => {
    return (
        <main className={classes.profile}>
            <img className={classes.profile__image}
                 src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                 alt="Profile photo"/>
            <div className={classes.profile__container}>
                <div className={classes.personalProfile__container}>
                    <img className={classes.personalProfile__avatar}
                         src="https://i1.sndcdn.com/avatars-000179405104-pcjko5-t240x240.jpg"
                         alt="Profile avatar"/>
                    <div>
                        <h2>Soldatov K</h2>
                        <ul>
                            <li>Date of Birth: 19/06</li>
                            <li>City: Obninsk</li>
                            <li>Education: Bauman Moscow State Technical University`16</li>
                            <li>
                                <a href="#">#</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <MyPosts/>
            </div>
        </main>
    );
};