import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import {NavigationContainer} from "./components/navigation/NavigationContainer";

const App = () => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavigationContainer/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile/*'
                               element={<Profile/>}/>
                        <Route path='/dialogs/*'
                               element={<Dialogs/>}/>
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