import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateProps} from "./redux/Store";
import {store} from "./redux/Store";
import {StoreContext} from "./StoreContext";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <StoreContext.Provider value={store}>
                <App />
        </StoreContext.Provider>,
        document.getElementById('root')
    );
}

rerenderEntireTree();

store.subscribe(() => {
    rerenderEntireTree();
});