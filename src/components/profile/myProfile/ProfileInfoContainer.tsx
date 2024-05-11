import {AppRootStateType} from "../../../redux/redux-store";
import {ActionsType} from "../../../redux/Store";
import {connect} from "react-redux";
import {ProfileInfo} from "./ProfileInfo";

let mapStateToProps = (state: AppRootStateType) => {
    return {
        profileData: state.profilePage.profileData
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {

    }
}

export const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo)