import {combineReducers, createStore} from 'redux'
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {navigationReducer} from "./navigation-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navigationPage: navigationReducer,
})

export let store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>