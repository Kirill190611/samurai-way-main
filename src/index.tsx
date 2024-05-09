import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateProps} from "./redux/Store";
import {store} from "./redux/redux-store";

let rerenderEntireTree = (state: StateProps) => {
    ReactDOM.render(
        <App state={state}
             dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});