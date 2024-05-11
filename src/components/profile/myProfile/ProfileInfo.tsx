import React from 'react';
import classes from "../Profile.module.css";
import {StoreContext} from "../../../StoreContext";
import {StoreProps} from "../../../redux/Store";


export const ProfileInfo = () => {
    return (
        <StoreContext.Consumer>
            {
                ((store: StoreProps | null) => {
                    return (
                        <div className={classes.profile__container}>

                            {store?.getState().profilePage.profileData.map(p => {
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
                    )
                })
            }
        </StoreContext.Consumer>
    );
};
