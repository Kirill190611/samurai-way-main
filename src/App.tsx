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
import {ActionsType, StateProps} from "./redux/State";

type AppProps = {
    state: StateProps
    dispatch: (action: ActionsType) => void
}

const App = ({
                 state,
                 dispatch,
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
                                                 dispatch={dispatch}/>}/>
                        <Route path='/dialogs/*'
                               element={<Dialogs state={state.dialogsPage}
                                                 dispatch={dispatch}/>}/>
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