import {AppRootStateType} from "../../../redux/redux-store";
import {ActionsType} from "../../../redux/Store";
import {connect} from "react-redux";
import {DialogsList} from "./DialogsList";

let mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.dialogsPage.users
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {

    }
}

export const DialogsListContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsList)