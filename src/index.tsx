import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateProps, store} from "./redux/State";

let rerenderEntireTree = (state: StateProps) => {
    ReactDOM.render(
        <App state={state}
             dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);