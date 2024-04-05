import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type PostProps = {
    id: number
    post: string
    likesCount: number
    src: string
}

export type ProfileDataProps = {
    name: string
    birthdayDate: string
    profileImage: string
    avatarImage: string
    city: string
    education: string
}

export type UsersProps = {
    id: number
    name: string
    avatar: string
}

export type MessageProps = {
    id: number
    message: string
}

const postsData: Array<PostProps> = [
    {
        id: 1,
        post: "Hello. How are you",
        likesCount: 5,
        src: "https://i1.sndcdn.com/avatars-000179405104-pcjko5-t240x240.jpg",
    },
    {
        id: 2,
        post: "My first post",
        likesCount: 10,
        src: "https://sotni.ru/wp-content/uploads/2023/08/gai-foks-khaker-8.webp",
    },
    {
        id: 3,
        post: "My second post",
        likesCount: 15,
        src: "https://sotni.ru/wp-content/uploads/2023/08/gai-foks-khaker-8.webp",
    },
]

const profileData: Array<ProfileDataProps> = [
    {
        name: "Soldatov Kirill",
        birthdayDate: "19/06/1994",
        profileImage: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
        avatarImage: "https://i1.sndcdn.com/avatars-000179405104-pcjko5-t240x240.jpg",
        city: "Obninsk",
        education: "Bauman Moscow State Technical University`16",
    },
]

const users: Array<UsersProps> = [
    {id: 1, name: "Kirill", avatar: "Avatar1",},
    {id: 2, name: "Nastya", avatar: "Avatar2",},
    {id: 3, name: "Dima", avatar: "Avatar3",},
    {id: 4, name: "Sergey", avatar: "Avatar4",},
    {id: 5, name: "Artem", avatar: "Avatar5",},
    {id: 6, name: "Valera", avatar: "Avatar6",},
]

const messages: Array<MessageProps> = [
    {id: 1, message: "Hello",},
    {id: 2, message: "Im Kirill",},
    {id: 3, message: "How are you?",},
    {id: 4, message: "OK",},
    {id: 5, message: "HI",},
    {id: 6, message: "Hello",},
]

ReactDOM.render(
    <App posts={postsData}
         users={users}
         messages={messages}
         profileData={profileData}/>,
    document.getElementById('root')
);