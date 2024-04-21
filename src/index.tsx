import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    addMessage,
    addPost,
    state, StateProps, subscribe,
    updatedNewMessageText,
    updateNewPostText
} from "./redux/State";

let rerenderEntireTree = (state: StateProps) => {
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
             updateNewPostText={updateNewPostText}
             addMessage={addMessage}
             updatedNewMessageText={updatedNewMessageText}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state);

subscribe(rerenderEntireTree);