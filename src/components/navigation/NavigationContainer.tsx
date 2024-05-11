import {AppRootStateType} from "../../redux/redux-store";
import {ActionsType} from "../../redux/Store";
import {connect} from "react-redux";
import {Navigation} from "./Navigation";

let mapStateToProps = (state: AppRootStateType) => {
    return {
        friendsList: state.navigationPage.topFriends
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsType) => void)  => {
    return {

    }
}

export const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation);