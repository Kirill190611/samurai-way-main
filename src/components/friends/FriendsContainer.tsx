import {ActionsType, FriendsListProps, FriendsStateProps} from "../../redux/Store";
import {connect} from "react-redux";
import {Friends} from "./Friends";
import {AppRootStateType} from "../../redux/redux-store";
import {onFollowFriendAC, setFriendsAC, unfollowFriendAC} from "../../redux/friends-reducer";

let mapStateToProps = (state: AppRootStateType) => {
    return {
        friends: state.friendsPage.friends
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {
        follow: (userId: string) => {
            dispatch(onFollowFriendAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowFriendAC(userId))
        },
        setFriends: (friends: FriendsListProps[]) => {
            dispatch(setFriendsAC(friends))
        }
    }
}

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);