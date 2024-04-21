import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navigation} from "./components/navigation/Navigation";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import {StateProps} from "./redux/State";

type AppProps = {
    state: StateProps
    addPost: () => void
    updateNewPostText: (newText: string) => void
    addMessage: () => void
    updatedNewMessageText: (newMessage: string) => void
}

const App = ({
                 state,
                 addPost,
                 updateNewPostText,
                 addMessage,
                 updatedNewMessageText,
             }: AppProps) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navigation state={state.navigationPage}/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile/*'
                               element={<Profile state={state.profilePage}
                                                 addPost={addPost}
                                                 updateNewPostText={updateNewPostText}/>}/>
                        <Route path='/dialogs/*'
                               element={<Dialogs state={state.dialogsPage}
                                                 addMessage={addMessage}
                                                 updatedNewMessageText={updatedNewMessageText}/>}/>
                        <Route path='/news/*'
                               Component={News}/>
                        <Route path='/music/*'
                               Component={Music}/>
                        <Route path='/settings/*'
                               Component={Settings}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;