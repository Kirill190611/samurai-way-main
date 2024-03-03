import React from 'react';

export const Profile = () => {
    return (
        <main className="profile">
            <img className="profile__image"
                 src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                 alt="Profile photo"/>
            <div className="profile__container">
                <div className="personal-profile__container">
                    <img className="personal-profile__avatar"
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
                <div className="profile__posts-conatiner">
                    <h3>My posts</h3>
                    <form className="" action="#">
                        <textarea placeholder="your news"></textarea>
                        <button type="submit">Send</button>
                    </form>
                    <ul>
                        <li>Good day everyone!</li>
                    </ul>
                </div>
            </div>
        </main>
    );
};