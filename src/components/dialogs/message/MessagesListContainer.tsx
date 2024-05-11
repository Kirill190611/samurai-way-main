import {ActionsType} from "../../../redux/Store";
import {addMessageAC, onMessageChangeAC} from "../../../redux/dialogs-reducer";
import {MessagesList} from "./MessagesList";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";

let mapStateToProps = (state: AppRootStateType) => {
    return {
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {
        addMessage: () => {
            dispatch(addMessageAC());
        },
        messageChange: (text: string) => {
            if (text !== null) {
                dispatch(onMessageChangeAC(text));
            }
        },
    }
}
export const MessagesListContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesList);