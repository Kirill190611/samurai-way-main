import React from 'react';
import {StoreProps} from "../../../../redux/Store";
import {addPostAC, onPostChangeAC} from "../../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../../StoreContext";

export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                ((store: StoreProps | null) => {
                    const addPost = () => {
                        store?.dispatch(addPostAC());
                    }

                    const onPostChange = (text: string) => {
                        if (text !== null) {
                            store?.dispatch(onPostChangeAC(text));
                        }
                    }

                    return (
                        <MyPosts updateNewPostText={onPostChange}
                                 addPost={addPost}
                                 posts={store?.getState().profilePage.postsData || []}
                                 newPostText={store?.getState().profilePage.newPostText || ""}/>
                    );
                })
            }
        </StoreContext.Consumer>
    );
};