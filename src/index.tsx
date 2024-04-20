import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, state, updateNewPostText} from "./redux/State";

ReactDOM.render(
    <App state={state}
         addPost={addPost}
         updateNewPostText={updateNewPostText}/>,
    document.getElementById('root')
);