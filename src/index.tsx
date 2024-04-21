import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateProps, store} from "./redux/State";

let rerenderEntireTree = (state: StateProps) => {
    ReactDOM.render(
        <App state={state}
             addPost={store.addPost.bind(store)}
             updateNewPostText={store.updateNewPostText.bind(store)}
             addMessage={store.addMessage.bind(store)}
             updatedNewMessageText={store.updatedNewMessageText.bind(store)}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);