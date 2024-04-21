import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    addMessage,
    addPost,
    state,
    updatedNewMessageText,
    updateNewPostText
} from "./redux/State";

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
             updateNewPostText={updateNewPostText}
             addMessage={addMessage}
             updatedNewMessageText={updatedNewMessageText}/>,
        document.getElementById('root')
    );
}