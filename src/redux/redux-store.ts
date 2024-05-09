import {combineReducers, createStore} from 'redux'
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {navigationReducer} from "./navigation-reducer";

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navigationPage: navigationReducer,
})

export let store = createStore(rootReducers);

export type AppRootStateType = ReturnType<typeof rootReducers>