import * as React from 'react';
import {PostItem} from "./PostItem";
import {PostProps} from "../../../../index";

type PostListProps = {
    postsData: Array<PostProps>
};
export const PostList = ({
                             postsData
                         }: PostListProps) => {
    return (
        <ul>

            {postsData.map(post => <PostItem id={post.id}
                                             post={post.post}
                                             likesCount={post.likesCount}
                                             src={post.src}/>
            )}

        </ul>
    );
};