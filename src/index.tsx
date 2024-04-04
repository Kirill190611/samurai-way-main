import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {PostProps} from "./components/profile/myPosts/post/PostList";
import {UsersProps} from "./components/dialogs/dialog/DialogsList";
import {MessageProps} from "./components/dialogs/message/MessagesList";

/*const postsData: Array<PostProps> = [
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
]*/

ReactDOM.render(
    <App />,
  document.getElementById('root')
);