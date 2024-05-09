import React from 'react';
import classes from "../Profile.module.css";
import {ProfileDataProps} from "../../../redux/Store";

type ProfileInfoProps = {
    profile: Array<ProfileDataProps>
}

export const ProfileInfo = ({
                                profile
                            }: ProfileInfoProps) => {
    return (
        <div className={classes.profile__container}>

            {profile.map(p => {
                return (
                    <>
                        <img className={classes.profile__image}
                             src={`${p.profileImage}`}
                             alt={`Profile photo of ${p.name} user`}/>
                        <div className={classes.personalProfile__container}>
                            <img className={classes.personalProfile__avatar}
                                 src={`${p.avatarImage}`}
                                 alt={`Profile avatar of ${p.name} user`}/>
                            <div>
                                <h2>{p.name}</h2>
                                <ul>
                                    <li>{p.birthdayDate}</li>
                                    <li>City: {p.city}</li>
                                    <li>Education: {p.education}</li>
                                    <li>
                                        <a href="#">#</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </>
                )
            })}

        </div>
    );
};
