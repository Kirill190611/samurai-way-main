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
import {MessageProps, PostProps, ProfileDataProps, UsersProps} from "./index";

type AppProps = {
    posts: Array<PostProps>
    users: Array<UsersProps>
    messages: Array<MessageProps>
    profileData: Array<ProfileDataProps>
}

const App = ({
                 posts,
                 users,
                 messages,
                 profileData,
             }: AppProps) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navigation/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile/*'
                               element={<Profile posts={posts}
                                                 profile={profileData}/>}/>
                        <Route path='/dialogs/*'
                               element={<Dialogs users={users}
                                                 messages={messages}/>}/>
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