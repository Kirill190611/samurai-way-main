import React from 'react';
import classes from "../Profile.module.css";

type ProfileInfoProps = {
    profileImage: string
    avatarImage: string
    name: string
    birthdayDate: string
    city: string
    education: string
}

export const ProfileInfo = ({
                                profileImage,
                                avatarImage,
                                name,
                                birthdayDate,
                                city,
                                education
                            }: ProfileInfoProps) => {
    return (
        <div className={classes.profile__container}>
            <img className={classes.profile__image}
                 src={`${profileImage}`}
                 alt="Profile photo"/>
            <div className={classes.personalProfile__container}>
                <img className={classes.personalProfile__avatar}
                     src={`${avatarImage}`}
                     alt="Profile avatar"/>
                <div>
                    <h2>{name}</h2>
                    <ul>
                        <li>{birthdayDate}</li>
                        <li>City: {city}</li>
                        <li>Education: {education}</li>
                        <li>
                            <a href="#">#</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};