import {v1} from "uuid";
import {ActionsType, NavigationStateProps} from "./Store";

let initState: NavigationStateProps = {
    topFriends: [
        {id: v1(), name: "Nastya", avatar: "avatar 1"},
        {id: v1(), name: "Sasha", avatar: "avatar 2"},
        {id: v1(), name: "Lika", avatar: "avatar 3"},
    ]
}
export const navigationReducer = (state = initState, action: ActionsType) => {
    return state
}